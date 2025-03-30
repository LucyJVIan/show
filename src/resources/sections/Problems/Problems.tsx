import { Fragment, memo, useCallback } from 'react';

import { Accordion, Social } from 'resources/components';
import { VideoPlayer } from 'resources/components/VideoPlayer/VideoPlayer';
import { galleryTreatments, problemsAreas } from 'resources/data/mocks';
import { useModal } from 'resources/hooks';
import { GalleryTreatmentItem } from 'resources/sections';

import {
    Body,
    Header,
    Image,
    MiniDescription,
    Root,
    Share,
    SocialWrapper,
    Text,
    TextWrapper,
    TextWrapperUp,
    AccordionWrapper,
    ImagesContainer,
    BoxContainer,
    Paragraphs,
} from './Problems-styles';
import { FeedbackBox } from '../FeedbackBox';
import { Gallery } from '../Gallery';
import { modalNameTreatment } from '../ModalTreatment';
import { miniDescription, problemText } from './Problems-constants';

export const Problems = memo(() => {
    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen(modalNameTreatment);
    }, [handleOpen]);

    return (
        <Root>
            <Body>
                <TextWrapperUp>
                    <Header>Лицо</Header>

                    <MiniDescription>{miniDescription}</MiniDescription>
                </TextWrapperUp>

                <Image src="/assets/images/cosmetics/halo.jpg" alt="image" />

                <TextWrapper>
                    <Paragraphs>
                        {problemText.map((item, index) => (
                            <Fragment key={index}>
                                <Text>{item}</Text>
                                <br />
                            </Fragment>
                        ))}
                    </Paragraphs>

                    <SocialWrapper>
                        <Share>Поделиться</Share>

                        <Social isVertical />
                    </SocialWrapper>
                </TextWrapper>

                <VideoPlayer video="https://askstudio.ru/app/uploads/2023/07/01-3.mp4" />

                <AccordionWrapper>
                    <Accordion items={problemsAreas} />
                </AccordionWrapper>

                <ImagesContainer>
                    {galleryTreatments.map(
                        (item, index) =>
                            index === 0 && (
                                <GalleryTreatmentItem key={index} {...item} onClickItem={handleOpenClick} isWide />
                            ),
                    )}
                </ImagesContainer>

                <Gallery miniGallery />

                <BoxContainer>
                    <FeedbackBox isMiniFeedback />
                </BoxContainer>
            </Body>
        </Root>
    );
});

Problems.displayName = 'Problems';
