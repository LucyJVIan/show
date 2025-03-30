'use client';

import { memo, useEffect, useState } from 'react';

import { IconLoader, Text } from 'resources/components';

import {
    BigImage,
    Image,
    ImageWrapper,
    NoImage,
    Root,
    WhiteRound,
    Year,
    IconWrapper,
} from './InteractiveYearsItem-styles';
import { InteractiveYearsItemProps } from './InteractiveYearsItems-types';

export const InteractiveYearsItem = memo<InteractiveYearsItemProps>((props) => {
    const { year, image, text, activeYears, isBigPicture, isDown } = props;

    const [currentImage, setCurrentImage] = useState(image);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (image !== currentImage) {
            setIsLoading(true);

            const img = new window.Image();
            img.src = image;
            img.onload = () => {
                setCurrentImage(image);
                setIsLoading(false);
            };
        }
    }, [image, currentImage]);

    return (
        <Root>
            {isBigPicture && activeYears === year ? (
                <BigImage>
                    <Year $isBigPicture={isBigPicture}>{year}</Year>

                    <ImageWrapper key={image}>
                        {!isLoading && <Image src={currentImage} alt={year} />}

                        {isLoading && (
                            <IconWrapper>
                                <IconLoader />
                            </IconWrapper>
                        )}
                    </ImageWrapper>

                    <Text mode="p" align="center">
                        {text}
                    </Text>
                </BigImage>
            ) : (
                <NoImage $isDown={isDown}>
                    <Year>{year}</Year>

                    <WhiteRound $isActive={activeYears === year}></WhiteRound>
                </NoImage>
            )}
        </Root>
    );
});

InteractiveYearsItem.displayName = 'InteractiveYearsItem';
