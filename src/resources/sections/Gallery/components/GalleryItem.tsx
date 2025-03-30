import React, { memo } from 'react';

import { ArrowButtonWithText, SliderBeforeAfter } from 'resources/components';
import { Link } from 'resources/components';

import { Root, Title, MiniGalleryWrapper } from './GalleryItem-styles';
import { GalleryItemProps } from './GalleryItem-types';

export const GalleryItem = memo<GalleryItemProps>((props) => {
    const { firstImage, secondImage, link, title, isGallery, miniGallery } = props;

    const buttonText = isGallery ? 'Подробнее' : 'Смотреть все';

    return (
        <Root as={miniGallery ? MiniGalleryWrapper : undefined}>
            <SliderBeforeAfter
                firstImage={firstImage}
                secondImage={secondImage}
                firstAlt={`${title}-before`}
                secondAlt={`${title}-after`}
                miniGallery={miniGallery}
            />

            <Title>{title}</Title>

            <Link href={link}>
                <ArrowButtonWithText>{buttonText}</ArrowButtonWithText>
            </Link>
        </Root>
    );
});

GalleryItem.displayName = 'GalleryItem';
