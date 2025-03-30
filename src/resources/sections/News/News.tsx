import { memo, useMemo } from 'react';

import { Link, Button, LayoutContainer, NewsCard } from 'resources/components';
import { news } from 'resources/data/mocks';

import { Action, Root, Banner, List } from './News-styles';
import { Title } from './News-styles';

export const News = memo(() => {
    const newslist = useMemo(
        () => ({
            post: news.items[0],
            related: news.items.slice(1, 4).slice(0, 3),
        }),
        [],
    );

    return (
        <LayoutContainer>
            <Root>
                <Title>{news.title}</Title>

                <Banner>
                    <NewsCard post={newslist.post} isFullwidth />
                </Banner>

                <List>
                    {newslist.related.map((post) => (
                        <NewsCard key={post.title} post={post} />
                    ))}
                </List>

                <Action>
                    <Link href="/news">
                        <Button mode="secondary">Все новости</Button>
                    </Link>
                </Action>
            </Root>
        </LayoutContainer>
    );
});

News.displayName = 'News';
