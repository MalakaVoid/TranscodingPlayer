import ffmpeg
import os
from concurrent.futures import ThreadPoolExecutor


VIDEO_PATH = os.path.join("video", "test.mp4")
script_directory = os.path.dirname(os.path.abspath(__file__))

transcoding_params = [
    {"output_path": os.path.join(script_directory, "video", "trans_1080p.mp4"), "resolution": "1920x1080", "bitrate": "4M"},
    {"output_path": os.path.join(script_directory, "video", "trans_720p.mp4"), "resolution": "1280x720", "bitrate": "2.5M"},
    {"output_path": os.path.join(script_directory, "video", "trans_480p.mp4"), "resolution": "854x480", "bitrate": "1M"},
    {"output_path": os.path.join(script_directory, "video", "trans_360p.mp4"), "resolution": "640x360", "bitrate": "500k"},
]

def transcode_video(input_path: str, output_path: str, resolution: str, bitrate: str):
    """Транскодирует видео с помощью FFmpeg."""
    try:
        (
            ffmpeg
            .input(input_path)
            .output(output_path, video_bitrate=bitrate, s=resolution, preset='fast')
            .run(overwrite_output=True)
        )
        print(f"Транскодирование завершено: {output_path}")
    except Exception as e:
        print(f"Ошибка при транскодировании {output_path}: {e}")

# Используем ThreadPoolExecutor для многопоточности
with ThreadPoolExecutor(max_workers=4) as executor:
    futures = [
        executor.submit(transcode_video, VIDEO_PATH, param["output_path"], param["resolution"], param["bitrate"])
        for param in transcoding_params
    ]

# Дожидаемся завершения всех потоков
for future in futures:
    future.result()