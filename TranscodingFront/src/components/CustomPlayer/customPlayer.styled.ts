import { styled } from '@linaria/react';
import { colors, mq } from '../../styles/styles.config';

export const PlayerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    background: #000;
    position: relative;
`;

interface IControlsWrapperProps {
    controlsVisible: boolean
}

export const ControllsWrapper = styled.div<IControlsWrapperProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.5s;
    opacity: ${({controlsVisible}) => controlsVisible ? '1' : '0'}
`;

export const BottomControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    ${mq({
        padding: [
            '5px 5px',
            '5px 10px',
            '10px 15px',
        ]
    })};
`;

export const CustomVideo = styled.video`
    width: 100%;
    height: auto;
    z-index: 1;

    ::-webkit-media-controls {display:none !important;};
    ::-webkit-media-controls-enclosure {display:none !important;};
`;

export const RangeInput = styled.input`
    width: 100%;
    margin: 10px 10px;
    z-index: 3;
    cursor: pointer;

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

export const FullScreenButton = styled.div`
    z-index: 3;
    position: relative;
    cursor: pointer;
    padding: 5px;
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
