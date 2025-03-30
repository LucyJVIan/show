'use client';

import { memo, useMemo } from 'react';

import { Button, LayoutContainer, NewsCard } from 'resources/components';
import { breadcrumbs, news } from 'resources/data/mocks';
import { usePagination } from 'resources/hooks';
import { Breadcrumbs } from 'resources/sections';

import { ButtonWrapper, Container, NewsCardsWrapper, Root } from './NewsPage-styles';

export const NewsPage = memo(() => {
    const { visibleCount, handleLoadMore } = usePagination(7, 6);

    const visibleItems = useMemo(() => news.items.slice(0, visibleCount), [visibleCount]);

    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.news} />

            <LayoutContainer>
                <NewsCardsWrapper>
                    {visibleItems.map((item, index) => (
                        <Container key={index}>
                            <NewsCard post={item} isFullwidth={index === 0} />
                        </Container>
                    ))}

                    {visibleCount < news.items.length && (
                        <ButtonWrapper>
                            <Button onClick={handleLoadMore}>Показать ещё</Button>
                        </ButtonWrapper>
                    )}
                </NewsCardsWrapper>
            </LayoutContainer>
        </Root>
    );
});

NewsPage.displayName = 'NewsPage';
