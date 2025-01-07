import { styled } from '@linaria/react';
import { maxContainerWidth } from '../../../styles/constants';
import { mq } from '../../../styles/styles.config';


export const MaxContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${maxContainerWidth}px;
    margin: 0 auto;
    width: 100%;
    ${mq({
        padding: [
            '20px 16px',
            '20px 20px',
            '40px 20px',
        ]
    })};
`;
