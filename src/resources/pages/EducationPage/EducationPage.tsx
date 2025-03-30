'use client';

import { memo, useRef, useState } from 'react';

import { LayoutContainer, ModalRoot, TextStyler } from 'resources/components';
import { breadcrumbs, tabs } from 'resources/data/mocks';
import {
    Banner,
    Breadcrumbs,
    FeedbackBox,
    ModalSubscribeTraining,
    ModalSuccessForm,
    TabSwitch,
    TrainingPrograms,
} from 'resources/sections';

import { Root, MainBanner, Wrapper, TextWrapper, Block } from './EducationPage-styles';

export const EducationPage = memo(() => {
    const trainingProgramsRef = useRef<HTMLDivElement | null>(null);

    const [activeTab, setActiveTab] = useState(0);

    const scrollToTrainingPrograms = () => {
        if (trainingProgramsRef.current) {
            const offsetTop = trainingProgramsRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = 110;
            window.scrollTo({
                top: offsetTop - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <ModalRoot>
            <Root>
                <Breadcrumbs items={breadcrumbs.education} />

                <MainBanner>
                    <Banner
                        title="Обучение по направлениям лазерные технологии и реконструктивная косметология"
                        posterUrl="/assets/images/molecules3.png"
                        description="Risus sodales ante dignissim eleifend eros rutrum. Habitant vehicula porttitor quisque tempor placerat sollicitudin nulla. Tellus nisl mauris sapien platea quisque egestas congue augue"
                        buttonTitle="Смотреть расписание"
                        buttonOnClick={scrollToTrainingPrograms}
                        isTraining
                    />
                </MainBanner>

                <ModalSubscribeTraining />

                <ModalSuccessForm
                    title="Спасибо за заявку"
                    description="Администратор свяжется с вами в ближайшее время"
                />

                <Wrapper>
                    <LayoutContainer>
                        <Block>
                            <TabSwitch tabs={tabs.education} activeTab={activeTab} setActiveTab={setActiveTab} />

                            <TextWrapper>
                                <TextStyler pageName={'educationApiPage'} contentIndex={activeTab} />
                            </TextWrapper>
                        </Block>

                        <div ref={trainingProgramsRef}>
                            <TrainingPrograms />
                        </div>
                    </LayoutContainer>

                    <FeedbackBox title="Отзывы врачей" />
                </Wrapper>
            </Root>
        </ModalRoot>
    );
});

EducationPage.displayName = 'EducationPage';
