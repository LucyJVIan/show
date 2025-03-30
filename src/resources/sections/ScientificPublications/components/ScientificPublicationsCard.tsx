import { memo, useMemo } from 'react';

import { Root, Title, Body, Type, DateText } from './ScientificPublicationsCard-styles';
import { ScientificPublicationsCardProps } from './ScientificPublicationsCard-types';

export const ScientificPublicationsCard = memo<ScientificPublicationsCardProps>((props) => {
    const { type, title, date, ...restProps } = props;

    const dateString = useMemo(() => {
        return new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
            .format(date)
            ?.replace('г.', 'года');
    }, [date]);

    return (
        <Root {...restProps}>
            <Title>{title}</Title>
            <Body>
                <Type>{type}</Type>
                <DateText>{dateString}</DateText>
            </Body>
        </Root>
    );
});

ScientificPublicationsCard.displayName = 'ScientificPublicationsCard';
