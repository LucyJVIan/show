import { memo, useMemo } from 'react';

import { Button, LayoutContainer } from 'resources/components';
import { usePagination } from 'resources/hooks';

import { GalleryItemWithTags } from './components/GalleryItemWithTags';
import { ButtonWrapper, GalleryWrapper, Root, Title } from './GalleryWithTags-styles';
import { GalleryWithTagsProps } from './GalleryWithTags-types';

export const GalleryWithTags = memo<GalleryWithTagsProps>((props) => {
    const { items } = props;

    const { visibleCount, handleLoadMore } = usePagination(9, 9);

    const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

    return (
        <LayoutContainer>
            <Root>
                <Title>Фотографии примеров работ косметолога Ларисы Радецкой</Title>

                <GalleryWrapper>
                    {visibleItems.map((element, index) => (
                        <GalleryItemWithTags key={index} element={element} isGallery />
                    ))}
                </GalleryWrapper>

                {visibleCount < items.length && (
                    <ButtonWrapper>
                        <Button onClick={handleLoadMore}>Показать ещё</Button>
                    </ButtonWrapper>
                )}
            </Root>
        </LayoutContainer>
    );
});

GalleryWithTags.displayName = 'GalleryWithTags';
