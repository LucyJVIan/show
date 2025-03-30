import { memo, useCallback, useMemo } from 'react';

import { ArrowButtonWithText } from 'resources/components';
import { ModalTrigger } from 'resources/components';
import { GalleryCard } from 'resources/components/GalleryCard/GalleryCard';

import { Root, Header, Title, Body } from './GalleryTreatmentItem-styles';
import { GalleryTreatmentItemProps } from './GalleryTreatmentItem-types';

export const GalleryTreatmentItem = memo<GalleryTreatmentItemProps>((props) => {
    const { title, images, onClickItem, isWide } = props;

    const shortImages = useMemo(() => {
        return images.length > 6 ? images.slice(0, 6) : images;
    }, [images]);

    const handleSeeAllClick = useCallback(() => {
        onClickItem?.({ title, images });
    }, [title, images, onClickItem]);

    return (
        <Root>
            <Header>
                <Title>{title}</Title>

                {images.length > 5 && (
                    <ModalTrigger asChild onClick={handleSeeAllClick}>
                        <ArrowButtonWithText>Смотреть все</ArrowButtonWithText>
                    </ModalTrigger>
                )}
            </Header>

            <Body $isWide={isWide}>
                {shortImages.map((params, index) => (
                    <GalleryCard
                        key={index}
                        image={params.image}
                        title={params.title}
                        href={params.link}
                        isWide={isWide}
                    />
                ))}
            </Body>
        </Root>
    );
});

GalleryTreatmentItem.displayName = 'GalleryTreatmentItem';
