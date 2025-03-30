import React, { memo } from 'react';

import { Anchor } from 'resources/components';

import { HeaderNavigationProps } from './HeaderNavigation-types';

export const HeaderNavigation = memo<HeaderNavigationProps>((props) => {
    const { onToggle } = props;

    return (
        <>
            <Anchor href="/healing" onClick={onToggle}>
                Лечение
            </Anchor>

            <Anchor href="/education" onClick={onToggle}>
                Обучение
            </Anchor>

            <Anchor href="/publications" onClick={onToggle}>
                Научная работа
            </Anchor>

            <Anchor href="/author" onClick={onToggle}>
                Об авторе
            </Anchor>

            <Anchor href="/feedback" onClick={onToggle}>
                Отзывы
            </Anchor>

            <Anchor href="/news" onClick={onToggle}>
                Новости
            </Anchor>

            <Anchor href="/contacts" onClick={onToggle}>
                Контакты
            </Anchor>
        </>
    );
});

HeaderNavigation.displayName = 'HeaderNavigation';
