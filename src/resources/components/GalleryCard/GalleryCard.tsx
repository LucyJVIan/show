import { memo } from 'react';

import { ImageContainer, Image, TitleImage } from './GalleryCard-styles';
import { GalleryCardProps } from './GalleryCard-types';

export const GalleryCard = memo<GalleryCardProps>((props) => {
    const { image, title, isWide, ...restProps } = props;

    return (
        <ImageContainer {...restProps}>
            <Image src={`../..${image}`} alt={title} $isWide={isWide} />

            <TitleImage>{title}</TitleImage>
        </ImageContainer>
    );
});

GalleryCard.displayName = 'GalleryCard';
