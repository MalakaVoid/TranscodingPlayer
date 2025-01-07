import { styled } from '@linaria/react';
import { colors, mq } from '../../../../styles/styles.config';

export const QualityControllsContainer = styled.div`
    position: absolute;
    top: 10px;
    z-index: 5;
    right: 10px;
`;

interface IQualityButtonsProps {
    isMenuOpen: Boolean
}

export const QualityButton = styled.div<IQualityButtonsProps>`
    // width: 150px;
    cursor: pointer;
    padding: 6px 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.white.brightest};
    border-radius: 7px;
    transition: 0.2s;
    box-sizing: border-box;
    background-color: ${({isMenuOpen}) => isMenuOpen ? colors.grey.transperent : 'transparent'};

    :hover{
        background-color: ${colors.grey.transperent};
    }

`;

export const QualityOptions = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    width: 150px;
    background-color: ${colors.grey.transperent};
    border-radius: 5px;
    overflow: hidden;
    transition: opacity 0.2s;
    opacity: 0;
    visibility: hidden;
`;

export const QualityOption = styled.div`
    width: 100%;
    padding: 7px 15px;
    box-sizing: border-box;
    font-weight: bold;
    color: ${colors.white.brightest};
    cursor: pointer;

    :hover{
        background-color: ${colors.red.brightest};
        transition: 0.2s;
    }
`;
