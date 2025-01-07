import React, { useState } from 'react';
import * as Styled from './qualityControlls.styled';
import { visiableClass } from '../../../../styles/constants';


type Props = {}

export const QualityControlls = (props: Props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Styled.QualityControllsContainer
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
        >

            <Styled.QualityButton
                isMenuOpen={isMenuOpen}
            >
                Качество
            </Styled.QualityButton>

            <Styled.QualityOptions
                className={isMenuOpen ? visiableClass : ''}
            >
                <Styled.QualityOption>
                    Авто
                </Styled.QualityOption>
                <Styled.QualityOption>
                    360p
                </Styled.QualityOption>
                <Styled.QualityOption>
                    480p
                </Styled.QualityOption>
                <Styled.QualityOption>
                    720p
                </Styled.QualityOption>
                <Styled.QualityOption>
                    1080p
                </Styled.QualityOption>
            </Styled.QualityOptions>

        </Styled.QualityControllsContainer>
    )
}
