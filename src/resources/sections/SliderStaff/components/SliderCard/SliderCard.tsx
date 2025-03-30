import { memo } from 'react';

import { Content, Description, IconWrap, Title, Root } from './SliderCard-styles';
import { SliderCardProps } from './SliderCard-types';

export const SliderCard = memo<SliderCardProps>((props) => {
    const { card, className } = props;

    const Icon = card.icon;

    return (
        <Root className={className}>
            <IconWrap>
                <Icon />
            </IconWrap>

            <Content>
                <Title>{card.title}</Title>

                <Description>{card.description}</Description>
            </Content>
        </Root>
    );
});

SliderCard.displayName = 'SliderCard';
