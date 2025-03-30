'use client';

import React, { memo, useCallback } from 'react';

import { LayoutContainer, ModalRoot, Text, TextStyler } from 'resources/components';
import { breadcrumbs, galleryTreatments } from 'resources/data/mocks';
import { useModal } from 'resources/hooks';
import {
    Breadcrumbs,
    FeedbackBox,
    Gallery,
    GalleryTreatmentItem,
    modalNameTreatment,
    ModalSubscribeTraining,
    ModalTreatment,
    ProcedureArticle,
    ProcedureBenefits,
    Sidebar,
} from 'resources/sections';

import { markedList, numberList, sidebarData } from './ProcedurePage-constants';
import { Block, Components, ImagesContainer, ListWrapper, Root, Wrapper } from './ProcedurePage-styles';

export const ProcedurePage = memo(() => {
    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen(modalNameTreatment);
    }, [handleOpen]);

    return (
        <ModalRoot>
            <ModalTreatment {...galleryTreatments[1]} />

            <ModalSubscribeTraining />

            <Root>
                <Breadcrumbs items={breadcrumbs.procedure} />

                <LayoutContainer>
                    <Wrapper>
                        <Sidebar items={sidebarData} />

                        <div>
                            <Components>
                                <TextStyler pageName={'testApiPage'} />

                                <ProcedureArticle />

                                <Block>
                                    <Text mode="h3">Маркированный список</Text>

                                    <Text mode="ul">
                                        {markedList.map((elem, index) => (
                                            <ListWrapper key={index}>
                                                <Text mode="span">•</Text>

                                                <Text mode="li" key={index}>
                                                    {elem}
                                                </Text>
                                            </ListWrapper>
                                        ))}
                                    </Text>
                                </Block>

                                <Block>
                                    <Text mode="h3">Нумерованный список</Text>

                                    <Text mode="ol">
                                        {numberList.map((elem, index) => (
                                            <ListWrapper key={index}>
                                                <Text mode="span">{index + 1}.</Text>

                                                <Text mode="li">{elem}</Text>
                                            </ListWrapper>
                                        ))}
                                    </Text>
                                </Block>

                                <Block>
                                    <ProcedureBenefits />
                                </Block>

                                <ImagesContainer>
                                    {galleryTreatments.map(
                                        (item, index) =>
                                            index === 1 && (
                                                <GalleryTreatmentItem
                                                    key={index}
                                                    {...item}
                                                    onClickItem={handleOpenClick}
                                                    isWide
                                                />
                                            ),
                                    )}
                                </ImagesContainer>
                            </Components>

                            <Gallery miniGallery />

                            <Components>
                                <FeedbackBox isMiniFeedback />
                            </Components>
                        </div>
                    </Wrapper>
                </LayoutContainer>
            </Root>
        </ModalRoot>
    );
});
ProcedurePage.displayName = 'ProcedurePage';
