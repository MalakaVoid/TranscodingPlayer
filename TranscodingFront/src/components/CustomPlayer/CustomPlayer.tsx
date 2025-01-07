import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './customPlayer.styled';
import { MuteControlls } from './widgets/MuteContolls/MuteControlls';
import { QualityControlls } from './widgets/QualityControlls/QualityControlls';


export const CustomPlayer = () => {

    const playerContainerRef = useRef<HTMLVideoElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const [isVideoMuted, setVideoMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullscreen, setFullscreen] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true);
    const [volume, setVolume] = useState(1);


    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const updateCurrentTime = () => {
                setCurrentTime(video.currentTime);
                rangeRef.current!.value = (video.currentTime / duration).toString(); // Обновление значения ползунка
                rangeRef.current!.style.setProperty('--value', `${(video.currentTime / duration) * 100}%`); // Обновление цвета
            };
            const updateDuration = () => setDuration(video.duration);
            video.addEventListener('timeupdate', updateCurrentTime);
            video.addEventListener('loadedmetadata', updateDuration);
            
            const handleFullscreenChange = () => {
                setFullscreen(!!document.fullscreenElement);
            };
        
            document.addEventListener('fullscreenchange', handleFullscreenChange);

            return () => {
                video.removeEventListener('timeupdate', updateCurrentTime);
                video.removeEventListener('loadedmetadata', updateDuration);
                document.removeEventListener('fullscreenchange', handleFullscreenChange);
            };
        }
    }, [duration]);
    

    const videoDurationHandleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = (event.target.value as unknown as number) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
        event.target.style.setProperty('--value', `${(seekTime / duration) * 100}%`);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const mutingVideo = () => {
        if (videoRef.current){
            videoRef.current.muted = !isVideoMuted;
            setVideoMuted(!isVideoMuted);
        }
    };

    const tooglePause = () => {
        isVideoPlaying && videoRef.current?.pause();
        !isVideoPlaying && videoRef.current?.play();
        setVideoPlaying(!isVideoPlaying);
    };


    const videoDurationHandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = parseFloat(event.target.value) * duration;
        setCurrentTime(seekTime);
        event.target.style.setProperty('--value', `${(seekTime / duration) * 100}%`);
    };

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            playerContainerRef.current?.requestFullscreen().then(() => {
                setFullscreen(true);
            }).catch(err => {
                console.error(`Ошибка при попытке перейти в полноэкранный режим: ${err.message}`);
            });
        } else {
            document.exitFullscreen().then(() => {
                setFullscreen(false);
            }).catch(err => {
                console.error(`Ошибка при выходе из полноэкранного режима: ${err.message}`);
            });
        }
    };

    const timerRef = useRef<number | undefined>(undefined);
    const handleMouseOver = () => {
        setControlsVisible(true);
    };

    const handleMouseOut = () => {
        isVideoPlaying && setControlsVisible(false);
        clearTimeout(timerRef.current);
    };

    const handleMouseMove = () => {
        setControlsVisible(true);
        clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            isVideoPlaying && setControlsVisible(false);
        }, 2000);
    };

    return (
        <Styled.PlayerWrapper
            ref={playerContainerRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseMove={handleMouseMove}
        >

            <Styled.CustomVideo
                ref={videoRef}
                controls={false}
            >
                <source src="http://localhost:5001/video" type="video/mp4" />
            </Styled.CustomVideo>

            <Styled.ControllsWrapper controlsVisible={controlsVisible}>

                <QualityControlls />

                <Styled.MiddleControlsWrapper
                    onClick={tooglePause}
                >
                    <Styled.PlayButton
                        style={{ display: isVideoPlaying ? 'none' : 'block' }}
                        onClick={tooglePause}
                    >
                        <svg viewBox="-0.5 0 7 7" fill="#e00000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#e00000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play"> </path> </g> </g> </g> </g></svg>
                    </Styled.PlayButton>

                    <Styled.PlayButton
                        style={{ display: isVideoPlaying ? 'block' : 'none' }}
                        onClick={tooglePause}
                    >
                        <svg viewBox="-1 0 8 8" version="1.1" fill="#e00000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#e00000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause"> </path> </g> </g> </g> </g></svg>
                    </Styled.PlayButton>
                </Styled.MiddleControlsWrapper>


                <Styled.BottomControlsWrapper>
                    
                    <MuteControlls
                        volume={volume}
                        onVolumeChange={handleVolumeChange}
                        mutingVideo={mutingVideo}
                        isVideoMuted={isVideoMuted}
                    />
                    
                    <Styled.RangeInput
                        ref={rangeRef}
                        type="range"
                        min="0"
                        max="1"
                        step="0.0001"
                        value={duration ? currentTime / duration : 0}
                        onChange={videoDurationHandleSeek}
                        onInput={videoDurationHandleInput}
                    />

                    <Styled.FullScreenButton
                        onClick={toggleFullscreen}
                    >
                        <svg viewBox="0 0 24 24" fill="none"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z" fill="#e00000"></path> <path d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z" fill="#e00000"></path> <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z" fill="#e00000"></path> <path d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z" fill="#e00000"></path> </g></svg>
                    </Styled.FullScreenButton>

                </Styled.BottomControlsWrapper>
            </Styled.ControllsWrapper>

        </Styled.PlayerWrapper>
    )
}
