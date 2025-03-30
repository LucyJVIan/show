'use client';

import { memo, useCallback, useMemo, useState } from 'react';

import { Text } from 'resources/components';
import { useCenteredWrapper } from 'resources/hooks';

import { interactiveYears } from './InteractiveYears-constants';
import { Root, ImageBlock, Container, YearsWrapper, InteractiveBlock, TextWrapper } from './InteractiveYears-styles';
import { InteractiveYearsItem } from './InteractiveYearsItem';

export const InteractiveYears = memo(() => {
    const [activeYears, setActiveYears] = useState('2020');

    const { wrapperRef, setWrapperRef, centerBlock } = useCenteredWrapper();

    const activeItem = interactiveYears.find((item) => item.year === activeYears);

    const handleClick = useCallback(
        (year: string) => {
            setActiveYears(year);
            centerBlock(wrapperRef);
        },
        [setActiveYears, centerBlock, wrapperRef],
    );

    const interactiveYearsLeft = useMemo(() => {
        return interactiveYears.slice(0, 2).map((item, index) => (
            <ImageBlock key={index} onClick={() => handleClick(item.year)} onTouchEnd={() => handleClick(item.year)}>
                <InteractiveYearsItem
                    image={item.image}
                    text={item.text}
                    year={item.year}
                    activeYears={activeYears}
                    isDown={index === 1}
                />
            </ImageBlock>
        ));
    }, [activeYears, handleClick]);

    const interactiveYearsRight = useMemo(() => {
        return interactiveYears.slice(2).map((item, index) => (
            <ImageBlock
                key={index + 2}
                onClick={() => handleClick(item.year)}
                onTouchEnd={() => handleClick(item.year)}
            >
                <InteractiveYearsItem
                    image={item.image}
                    text={item.text}
                    year={item.year}
                    activeYears={activeYears}
                    isDown={index === 0}
                />
            </ImageBlock>
        ));
    }, [handleClick, activeYears]);

    return (
        <Root>
            <TextWrapper>
                <Text mode="h2">Образование, карьера и знаковые достижения</Text>
            </TextWrapper>

            <YearsWrapper ref={setWrapperRef}>
                <InteractiveBlock>
                    <Container>
                        {interactiveYearsLeft}

                        {activeItem && (
                            <InteractiveYearsItem
                                image={activeItem.image}
                                text={activeItem.text}
                                year={activeItem.year}
                                activeYears={activeYears}
                                isBigPicture
                            />
                        )}

                        {interactiveYearsRight}
                    </Container>
                </InteractiveBlock>
            </YearsWrapper>
        </Root>
    );
});

InteractiveYears.displayName = 'InteractiveYears';
