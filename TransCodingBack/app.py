import os
import logging
from fastapi import FastAPI, Response, Request
from fastapi.responses import StreamingResponse

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

VIDEO_NAME = "trans"
VIDEO_FORMAT = "mp4"


@app.post("/")
async def main():
    return Response({"message": "Hello World"})


@app.get("/video")
async def get_video(request: Request, quality: str = "720p"):
    video_path = get_video_path(VIDEO_NAME, quality, VIDEO_FORMAT)

    range_header = request.headers.get("range", None)
    if not range_header:
        return Response(status_code=416)

    # Парсим заголовок Range
    start, end = parse_range_header(video_path, range_header)

    # Открываем транскодированное видео в бинарном режиме
    def video_stream(start, end):
        with open(video_path, "rb") as video:
            video.seek(start)
            while start <= end:
                chunk = video.read(1024 * 1024)  # Читаем по 1 МБ
                if not chunk:
                    break
                yield chunk
                start += len(chunk)

    # Устанавливаем заголовки ответа
    headers = {
        "Content-Range": f"bytes {start}-{end}/{os.path.getsize(video_path)}",
        "Accept-Ranges": "bytes",
        "Content-Length": str(end - start + 1),
        "Content-Type": "video/mp4",
    }

    return StreamingResponse(video_stream(start, end), headers=headers, status_code=206)


def parse_range_header(video_path, range_header: str):
    range_type, range_value = range_header.split("=")
    start, end = range_value.split("-")
    start = int(start) if start else 0
    end = int(end) if end else os.path.getsize(video_path) - 1
    return start, end


def get_video_path(video_name, quality, format):
    if quality == None:
        return os.path.join('video', video_name + "_720p" + format)
    return os.path.join('video', video_name + "_" + quality + "." + format)



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5001)
