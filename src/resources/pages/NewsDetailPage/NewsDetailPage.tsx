'use client';

import { useParams } from 'next/navigation';
import { memo } from 'react';

import { LayoutContainer } from 'resources/components';
import { news } from 'resources/data/mocks/';
import { breadcrumbs } from 'resources/data/mocks/breadcrumbs';
import { Breadcrumbs, NewsDetail } from 'resources/sections';

import { Root } from './NewsDetailPage-styles';

export const NewsDetailPage = memo(() => {
    const params = useParams();

    const { slug } = params;

    const newsData = news.items.find((item) => item.url === slug);

    if (!newsData) {
        return <>Публикация не найдена</>;
    }

    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.newsDetail} />

            <LayoutContainer>
                <NewsDetail post={newsData} />
            </LayoutContainer>
        </Root>
    );
});

NewsDetailPage.displayName = 'NewsDetailPage';
