'use client';
import { Button, LayoutContainer } from 'resources/components';
import { useAppRoute } from 'resources/hooks';

import { Root, Title, NotFoundLink, Body } from './NotFoundPage-styles';

export const NotFoundPage = () => {
    const pathnameHome = useAppRoute('home');

    return (
        <LayoutContainer>
            <Root>
                <Body>
                    <Title>404</Title>
                    <NotFoundLink href={pathnameHome}>
                        <Button>На главную</Button>
                    </NotFoundLink>
                </Body>
            </Root>
        </LayoutContainer>
    );
};
