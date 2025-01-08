import React from 'react';
import * as Styled from './middleContolls.styled';


type MiddleControllsProps = {
    isVideoPlaying: Boolean,
    tooglePause: () => void,
}

export const MiddleControlls = ({ isVideoPlaying, tooglePause }: MiddleControllsProps) => {

    return (
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
    )
}
