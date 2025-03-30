import React, { useCallback, useState, memo } from 'react';

import { ArrowButton, LayoutContainer } from 'resources/components';

import { SliderStaffItem } from './components';
import { Root, Header, Title, Actions, Body } from './SliderStaff-styles';
import { SliderStaffProps } from './SliderStaff-types';

export const SliderStaff = memo<SliderStaffProps>((props) => {
    const { slides, isMainRounded } = props;
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides, setCurrentSlide]);

    const handleNextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides, setCurrentSlide]);

    return (
        <LayoutContainer>
            <Root $isMainRounded={isMainRounded}>
                <Header>
                    <Title>Компетенции</Title>

                    {slides.length > 1 && (
                        <Actions>
                            <ArrowButton mode="left" onClick={handlePrevSlide} />

                            <ArrowButton mode="right" onClick={handleNextSlide} />
                        </Actions>
                    )}
                </Header>

                <Body $translateX={`${currentSlide * -100}%`}>
                    {slides.map((slide, index) => (
                        <SliderStaffItem slide={slide} key={index} />
                    ))}
                </Body>
            </Root>
        </LayoutContainer>
    );
});

SliderStaff.displayName = 'sliderStaff';
