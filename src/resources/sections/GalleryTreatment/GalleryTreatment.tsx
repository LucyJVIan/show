import { memo, useCallback, useState } from 'react';

import { Button, ModalRoot } from 'resources/components';
import { useModal } from 'resources/hooks';
import {
    GalleryTreatmentItem,
    GalleryTreatmentItemType,
    GalleryTreatmentProps,
    modalNameTreatment,
    ModalSubscribeTraining,
    ModalTreatment,
} from 'resources/sections';

import { Actions, Body, BodyLine, ImagesContainer, Root, Title } from './GalleryTreatment-styles';

export const GalleryTreatment = memo<GalleryTreatmentProps>((props) => {
    const { items, title } = props;
    const [activeItems, setActiveItems] = useState<GalleryTreatmentItemType | null>(null);

    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(
        (item: GalleryTreatmentItemType) => {
            setActiveItems(item);
            handleOpen(modalNameTreatment);
        },
        [handleOpen],
    );

    return (
        <ModalRoot>
            {activeItems && <ModalTreatment {...activeItems} />}

            <ModalSubscribeTraining />

            <Root>
                <Title>
                    {title || (
                        <>
                            Лечение косметологических
                            <br />
                            проблем
                        </>
                    )}
                </Title>

                <Actions asChild>
                    <Button mode="accent" onClick={() => handleOpenClick(items[0])}>
                        Узнать подробнее
                    </Button>
                </Actions>

                <Body>
                    <BodyLine />
                    <ImagesContainer>
                        {items.map((item) => (
                            <GalleryTreatmentItem key={item.title} {...item} onClickItem={handleOpenClick} />
                        ))}
                    </ImagesContainer>
                </Body>
            </Root>
        </ModalRoot>
    );
});

GalleryTreatment.displayName = 'GalleryTreatment';
