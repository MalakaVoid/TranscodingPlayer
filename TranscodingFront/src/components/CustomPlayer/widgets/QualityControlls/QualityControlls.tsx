import React, { useState } from 'react';
import * as Styled from './qualityControlls.styled';
import { videoResolutions, visiableClass } from '../../../../styles/constants';


type Props = {
    onQualityChange: (quality: String) => void;
}

export const QualityControlls = ({onQualityChange}: Props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedQuality, setSelectedQuality] = useState<string>('');

    const handleQualityChange = (quality: string) => {
        setSelectedQuality(quality);
        onQualityChange(quality);
        setIsMenuOpen(false);
    };

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
                className={isMenuOpen && visiableClass}
            >
                {Object.entries(videoResolutions).map(([quality, label]) => (
                    <Styled.QualityOption
                        className={selectedQuality === quality && "active"}
                        key={quality}
                        onClick={() => handleQualityChange(quality)}
                    >
                        {label}
                    </Styled.QualityOption>
                ))}
            </Styled.QualityOptions>

        </Styled.QualityControllsContainer>
    )
}
