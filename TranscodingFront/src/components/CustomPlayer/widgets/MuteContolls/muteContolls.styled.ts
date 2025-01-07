import { styled } from '@linaria/react';
import { colors, mq } from '../../../../styles/styles.config';

const muteContainerSizes = [
    '35px',
    '45px',
    '45px',
]

const muteRangeSize = [
    "120px",
    "130px",
    "150px",
]

export const VolumeContolContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: 0.25s;
    transition: opacity 0.2s;
    opacity: 0;
    visibility: hidden;
    ${mq({
        height: muteRangeSize
        .map((item, index) => `calc(${item} + ${muteContainerSizes[index]} + 15px)`),
    })};
`;


export const VolumeControl = styled.input`
    z-index: 3;
    cursor: pointer;
    transform: rotate(270deg) translate(0, 50%);
    left: 50%;
    position: absolute;
    transform-origin: left bottom;
    ${mq({
        bottom: muteContainerSizes.map((item) => `calc(${item} + 10px)`),
        width: muteRangeSize
    })};

    -webkit-appearance: none;
    appearance: none;
    height: 7px;
    border-radius: 15px;
    background:rgba(211, 211, 211, 0.5);
    outline: none;

    /* Стили для пройденного расстояния */
    ::-webkit-slider-runnable-track {
        height: 7px;
        background: linear-gradient(to right, ${colors.red.medium} 0%, ${colors.red.medium} var(--value), rgba(211, 211, 211, 0) var(--value), rgba(211, 211, 211, 0) 100%);
        border-radius: 15px;
    };

    ::-moz-range-track {
        height: 7px;
        background: linear-gradient(to right, ${colors.red.medium} 0%, ${colors.red.medium} var(--value), rgba(211, 211, 211, 0) var(--value), rgba(211, 211, 211, 0) 100%);
        border-radius: 15px;
        opacity: 0.7;
        transition: opacity .2s;
    };

    ::-webkit-slider-thumb {
        border-radius: 50%;
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: ${colors.red.medium};
        cursor: pointer;
        margin-top: -6px; /* Смещение вверх */
    };

    ::-moz-range-thumb {
        width: 20px; /* Ширина ползунка */
        height: 20px; /* Высота ползунка */
        background: ${colors.red.medium}; /* Цвет ползунка */
        cursor: pointer; /* Курсор при наведении */
    };
`;

export const MuteButton = styled.div`
    z-index: 3;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;

    ${mq({
        width: [
            '30px',
            '40px',
            '40px',
        ],
        height: [
            '30px',
            '40px',
            '40px',
        ],
    })};

    svg{
        width: 100%;
        height: 100%;
    };

    
`;

export const MuteButtonContainer = styled.div`
    z-index: 3;
    position: relative;
    ${mq({
        width: muteContainerSizes,
        height: muteContainerSizes,
        maxWidth: muteContainerSizes,
        maxHeight: muteContainerSizes,
        minWidth: muteContainerSizes,
        minHeight: muteContainerSizes,
    })};
`;