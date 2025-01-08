import { styled } from '@linaria/react';
import { colors, mq } from '../../../../styles/styles.config';

export const MiddleControlsWrapper = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    position: absolute;
    top: 0;
    left: 0;
`;

export const PlayButton = styled.div`
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, calc(-50% + 30px));
    top: 50%;
    left: 50%;
    z-index: 3;
    ${mq({
        width: [
            '40px',
            '50px',
            '60px',
        ],
        height: [
            '40px',
            '50px',
            '60px',
        ],
    })};

    svg{
        width: 100%;
        height: 100%;
    };
`;