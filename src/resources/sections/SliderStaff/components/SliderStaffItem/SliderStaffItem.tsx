import { memo } from 'react';

import { Button } from 'resources/components';

import {
    Root,
    SlideImage,
    Content,
    Person,
    PersonName,
    PersonInfo,
    PersonBody,
    ButtonMore,
    ButtonMoreMobile,
    Cards,
    SlideImageContainer,
    SlideImageMobileAndTableTop,
    Description,
} from './SliderStaffItem-styles';
import { SliderStaffItemProps } from './SliderStaffItem-types';
import { SliderCard } from '../index';

export const SliderStaffItem = memo<SliderStaffItemProps>((props) => {
    const { slide } = props;

    return (
        <Root>
            <SlideImage src={slide.image} />

            <Content>
                <Person>
                    <SlideImageContainer>
                        <SlideImageMobileAndTableTop src={slide.image} />
                    </SlideImageContainer>

                    <PersonBody>
                        <PersonInfo>
                            <PersonName>{slide.name}</PersonName>
                            <Description>{slide.description}</Description>
                        </PersonInfo>

                        <ButtonMore href={slide.moreLink} target="_blank">
                            <Button mode="secondary">Узнать подробнее</Button>
                        </ButtonMore>
                    </PersonBody>
                </Person>

                <Cards>
                    {slide.cards.map((card, index) => (
                        <SliderCard card={card} key={index} />
                    ))}

                    <ButtonMoreMobile href={slide.moreLink} target="_blank">
                        <Button mode="secondary">Узнать подробнее</Button>
                    </ButtonMoreMobile>
                </Cards>
            </Content>
        </Root>
    );
});

SliderStaffItem.displayName = 'sliderStaffItem';
