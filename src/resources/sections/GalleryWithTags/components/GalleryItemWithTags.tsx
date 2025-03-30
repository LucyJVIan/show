import { memo } from 'react';

import { GalleryItem } from 'resources/sections/Gallery/components/GalleryItem';

import { GalleryItemWrapper, TagsItem, TagsWrapper } from './GalleryItemWithTags-styles';
import { GalleryItemWithTagsProps } from './GalleryItemWithTags-types';

export const GalleryItemWithTags = memo<GalleryItemWithTagsProps>((props) => {
    const { element, isGallery } = props;

    return (
        <GalleryItemWrapper>
            <GalleryItem
                firstImage={element.firstImage}
                secondImage={element.secondImage}
                title={element.title}
                link={element.link}
                isGallery={isGallery}
            />

            <TagsWrapper>
                {element.tags.map((tag, index) => (
                    <TagsItem key={index}>{tag}</TagsItem>
                ))}
            </TagsWrapper>
        </GalleryItemWrapper>
    );
});

GalleryItemWithTags.displayName = 'GalleryItemWithTags';
