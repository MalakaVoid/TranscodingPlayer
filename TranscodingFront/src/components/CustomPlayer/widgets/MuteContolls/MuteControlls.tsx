import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './muteContolls.styled';
import { hiddenBlockClass, visiableClass } from '../../../../styles/constants';

interface MuteButtonProps {
    isVideoMuted: boolean;
    mutingVideo: () => void;
    onVolumeChange: (newVolume: number) => void;
    volume: number;
}

export const MuteControlls: React.FC<MuteButtonProps> = ({ isVideoMuted, mutingVideo, volume, onVolumeChange }) => {

    const volumeRange = useRef<HTMLInputElement>(null);
    const [isVolumeControlVisible, setVolumeControlVisible] = useState(false);


    useEffect(() => {
        setVolumeTrack(volume);
    }, [volume]); 

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);

        newVolume !== 0 && isVideoMuted && mutingVideo();
        newVolume === 0 && !isVideoMuted && mutingVideo();

        onVolumeChange(newVolume);
        setVolumeTrack(newVolume);
    }

    const handleMuteButtonClick = () => {
        !isVideoMuted && setVolumeTrack(0);
        isVideoMuted && setVolumeTrack(volume);
        mutingVideo();
    }

    const setVolumeTrack = (volume: number) => {
        if (volumeRange.current)
            volumeRange.current.style.setProperty('--value', `${volume * 100}%`);
    }

    const setHiddenClass = (isHidden: Boolean) => {
        return isHidden ? hiddenBlockClass : ""
    }

    return (
        <Styled.MuteButtonContainer
            onMouseEnter={() => setVolumeControlVisible(true)}
            onMouseLeave={() => setVolumeControlVisible(false)}
        >

            <Styled.MuteButton
                onClick={handleMuteButtonClick}
                className={setHiddenClass(!isVideoMuted)}
            >
                <svg height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.159 496.159" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{ fill: "#e00000" }} d="M496.159,248.086c0-137.022-111.07-248.082-248.076-248.082C111.071,0.004,0,111.063,0,248.086 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.086z"></path> <g> <path style={{ fill: "#FFFFFF" }} d="M259.432,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791h-35.164 c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79 c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.219 C264.966,134.339,262.842,130.768,259.432,128.917z"></path> <path style={{ fill: "#FFFFFF" }} d="M355.405,248.079l30.384-30.384c3.515-3.516,3.515-9.213,0-12.729 c-3.515-3.514-9.213-3.514-12.728,0l-30.384,30.385l-30.384-30.385c-3.515-3.514-9.213-3.514-12.728,0 c-3.515,3.516-3.515,9.213,0,12.729l30.385,30.384l-30.384,30.384c-3.515,3.516-3.515,9.213,0,12.729 c1.757,1.757,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636l30.384-30.385l30.384,30.385 c1.757,1.757,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636c3.515-3.516,3.515-9.213,0-12.729L355.405,248.079z"></path> </g> </g></svg>
            </Styled.MuteButton>

            <Styled.MuteButton
                onClick={handleMuteButtonClick}
                className={setHiddenClass(isVideoMuted)}
            >
                <svg height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.159 496.159" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{ fill: "#e00000" }} d="M496.159,248.085c0-137.023-111.07-248.082-248.076-248.082C111.071,0.003,0,111.063,0,248.085 c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.159,385.086,496.159,248.085z"></path> <g> <path style={{ fill: "#FFFFFF" }} d="M284.828,128.917c-3.409-1.851-7.559-1.688-10.813,0.425l-95.137,61.791h-35.164 c-5.845,0-10.583,4.738-10.583,10.582v92.728c0,5.845,4.738,10.583,10.583,10.583h35.164l95.137,61.79 c1.748,1.135,3.754,1.708,5.765,1.708c1.733,0,3.471-0.426,5.049-1.283c3.41-1.852,5.534-5.42,5.534-9.301V138.218 C290.363,134.338,288.239,130.768,284.828,128.917z"></path> <path style={{ fill: "#FFFFFF" }} d="M319.82,322.937c0.894,0,1.801-0.162,2.685-0.504c24.239-9.412,40.524-38.49,40.524-72.361 c0-29.956-13.2-57.047-33.63-69.018c-3.534-2.072-8.08-0.883-10.153,2.652c-2.072,3.535-0.885,8.082,2.651,10.152 c15.971,9.358,26.291,31.424,26.291,56.213c0,27.36-12.77,51.426-31.055,58.525c-3.82,1.482-5.715,5.783-4.231,9.604 C314.041,321.139,316.847,322.937,319.82,322.937z"></path> </g> </g></svg>
            </Styled.MuteButton>

            <Styled.VolumeContolContainer
                className={isVolumeControlVisible ? visiableClass : ''}
            >
                <Styled.VolumeControl
                    ref={volumeRange}
                    type="range"
                    min="0"
                    max="1"
                    step="0.001"
                    value={isVideoMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                />

            </Styled.VolumeContolContainer>

        </Styled.MuteButtonContainer>
    )
}
