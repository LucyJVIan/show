import { memo, useMemo } from 'react';

import { Link } from 'resources/components';

import { Root, Poster, PosterContainer, Info, Title, Description, DateText } from './NewsCard-styles';
import { NewsCardProps } from './NewsCard-types';

export const NewsCard = memo<NewsCardProps>((props) => {
    const { post, isFullwidth } = props;

    const dateString = useMemo(() => {
        return new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
            .format(post.date)
            ?.replace('г.', '');
    }, [post.date]);

    return (
        <Link href={`/news/${post.url}`}>
            <Root $isFull={isFullwidth}>
                <PosterContainer $isFull={isFullwidth}>
                    <Poster src={post.poster} $isFull={isFullwidth} />
                </PosterContainer>

                <Info $isFull={isFullwidth}>
                    <Title $isFull={isFullwidth}>{post.title}</Title>

                    <Description $isFull={isFullwidth}>{post.description}</Description>

                    <DateText>{dateString}</DateText>
                </Info>
            </Root>
        </Link>
    );
});

NewsCard.displayName = 'NewsCard';
