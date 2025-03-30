import { memo } from 'react';

import { GalleryCard } from 'resources/components';

import { Root } from './GalleryList-styles';
import { GalleryListProps } from './GalleryList-types';

export const GalleryList = memo<GalleryListProps>((props) => {
    const { images } = props;

    return (
        <Root>
            {images.map((image, index) => (
                <GalleryCard key={index} image={image.image} title={image.title} href={image.link} />
            ))}
        </Root>
    );
});

GalleryList.displayName = 'GalleryList';
