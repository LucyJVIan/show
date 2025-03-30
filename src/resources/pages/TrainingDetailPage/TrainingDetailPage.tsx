'use client';

import { memo } from 'react';

import { ModalRoot, Social } from 'resources/components';
import { breadcrumbs } from 'resources/data/mocks';
import { FeedbackBox, Banner, ModalSubscribeTraining, ModalSuccessForm, Breadcrumbs } from 'resources/sections';

import { contentParagraphs } from './TrainingDetailPage-constants';
import {
    Root,
    Body,
    Wrap,
    Content,
    ContentInfo,
    ContentActions,
    PosterContainer,
    PosterImage,
    Card,
    CardTitle,
    Links,
    SocialBody,
    SocialList,
    SocialTitle,
    CardAnchor,
    MainBanner,
    ContentParagraph,
    FeedbackContainer,
} from './TrainingDetailPage-styles';

export const TrainingDetailPage = memo(() => {
    return (
        <ModalRoot>
            <Root>
                <Wrap>
                    <Breadcrumbs items={breadcrumbs.training} />

                    <ModalSubscribeTraining />

                    <ModalSuccessForm
                        title="Спасибо за заявку"
                        description="Администратор свяжется с вами в ближайшее время"
                    />

                    <MainBanner>
                        <Banner
                            title="Название программы обучения"
                            posterUrl="/assets/images/training/molecules.png"
                            description="Краткое описание учебной программы, кому она подходит и что даёт"
                            buttonTitle="Записаться"
                            isTraining
                            isModal
                        />
                    </MainBanner>

                    <Body>
                        <Content>
                            <PosterContainer>
                                <PosterImage src="/assets/images/training/poster.png" />
                            </PosterContainer>

                            <ContentInfo>
                                {contentParagraphs.map((item, i) => (
                                    <ContentParagraph key={i}>{item}</ContentParagraph>
                                ))}
                            </ContentInfo>

                            <ContentActions>
                                <Card>
                                    <CardTitle>Программа по направлению «Реконструкционная косметология»</CardTitle>

                                    <Links>
                                        <CardAnchor href="#">Ссылка на научную работу</CardAnchor>

                                        <CardAnchor href="#">Ссылка на научную работу</CardAnchor>

                                        <CardAnchor href="#">Ссылка на научную работу</CardAnchor>
                                    </Links>
                                </Card>

                                <SocialBody>
                                    <SocialTitle>Поделиться</SocialTitle>

                                    <SocialList>
                                        <Social />
                                    </SocialList>
                                </SocialBody>
                            </ContentActions>
                        </Content>
                    </Body>
                </Wrap>

                <FeedbackContainer>
                    <FeedbackBox title="Отзывы врачей о программе" />
                </FeedbackContainer>
            </Root>
        </ModalRoot>
    );
});

TrainingDetailPage.displayName = 'TrainingDetailPage';
