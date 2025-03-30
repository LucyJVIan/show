import { memo } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowButton, Button } from 'resources/components';
import { feedbacks } from 'resources/data/mocks';
import {
    feedbackBoxSwiperBreakpoints,
    feedbackBoxSwiperNavigation,
} from 'resources/sections/FeedbackBox/FeedbackBox-constants';

import { FeedbackBoxItem } from './components/FeedbackBoxItem';
import {
    Body,
    Header,
    LeftButtonMobile,
    LinkAllExamples,
    LinkAllExamplesMobile,
    RightButtonMobile,
    Root,
    Title,
    FeedbackButton,
} from './FeedbackBox-styles';
import 'swiper/css/navigation';
import 'swiper/css';
import { FeedbackBoxProps } from './FeedbackBox-types';

export const FeedbackBox = memo<FeedbackBoxProps>((props) => {
    const { isMiniFeedback, title } = props;

    return (
        <Root>
            <Header $isMiniFeedback={isMiniFeedback}>
                <Title $isMiniFeedback={isMiniFeedback}>{title || 'Отзывы пациентов'}</Title>

                <LeftButtonMobile>
                    <ArrowButton mode="left" className="swiper-button-feedback-prev" />
                </LeftButtonMobile>

                <RightButtonMobile>
                    <ArrowButton mode="right" className="swiper-button-feedback-next" />
                </RightButtonMobile>

                <LinkAllExamples href="/feedback">
                    <Button mode="secondary">Все отзывы</Button>
                </LinkAllExamples>
            </Header>

            <Body $isMiniFeedback={isMiniFeedback}>
                <FeedbackButton>
                    <ArrowButton mode="left" className="swiper-button-feedback-prev" />
                </FeedbackButton>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    breakpoints={feedbackBoxSwiperBreakpoints}
                    navigation={feedbackBoxSwiperNavigation}
                >
                    {feedbacks &&
                        feedbacks.map((elem, idx) => (
                            <SwiperSlide key={idx}>
                                <FeedbackBoxItem
                                    name={elem.name}
                                    text={elem.text}
                                    date={elem.date}
                                    procedure={elem.procedure}
                                    feedbackImage={elem.feedbackImage}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>

                <FeedbackButton>
                    <ArrowButton mode="right" className="swiper-button-feedback-next" />
                </FeedbackButton>
            </Body>

            <LinkAllExamplesMobile href="/feedback">
                <Button mode="secondary">Все отзывы</Button>
            </LinkAllExamplesMobile>
        </Root>
    );
});

FeedbackBox.displayName = 'FeedbackBox';
