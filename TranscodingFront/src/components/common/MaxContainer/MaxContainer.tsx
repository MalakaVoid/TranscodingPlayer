import React from 'react';
import * as Styled from './MaxContainer.styled';

type Props = {
    children: React.ReactNode;
};

export const MaxContainer = (props: Props) => {
    return (
        <Styled.MaxContainerWrapper>
            {props.children}
        </Styled.MaxContainerWrapper>
    );
};
