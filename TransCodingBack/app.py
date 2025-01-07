import os
import logging
from fastapi import FastAPI, Response, Request
from fastapi.responses import StreamingResponse
import ffmpeg

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

VIDEO_PATH = os.path.join("video", "test.mp4")
TRANSCODED_VIDEO_PATH = os.path.join("video", "trans.mp4")

@app.post("/")
async def main():
    return Response({"message": "Hello World"})

@app.get("/video")
async def get_video(request: Request):
    # Получаем заголовок Range
    range_header = request.headers.get("range", None)
    if not range_header:
        return Response(status_code=416)  # Requested Range Not Satisfiable

    # Парсим заголовок Range
    start, end = parse_range_header(range_header)

    # Открываем транскодированное видео в бинарном режиме
    def video_stream(start, end):
        with open(TRANSCODED_VIDEO_PATH, "rb") as video:
            video.seek(start)
            while start <= end:
                chunk = video.read(1024 * 1024)  # Читаем по 1 МБ
                if not chunk:
                    break
                yield chunk
                start += len(chunk)

    # Устанавливаем заголовки ответа
    headers = {
        "Content-Range": f"bytes {start}-{end}/{os.path.getsize(TRANSCODED_VIDEO_PATH)}",
        "Accept-Ranges": "bytes",
        "Content-Length": str(end - start + 1),
        "Content-Type": "video/mp4",
    }

    return StreamingResponse(video_stream(start, end), headers=headers, status_code=206)

def parse_range_header(range_header: str):
    range_type, range_value = range_header.split("=")
    start, end = range_value.split("-")
    start = int(start) if start else 0
    end = int(end) if end else os.path.getsize(TRANSCODED_VIDEO_PATH) - 1
    return start, end

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5001)
