import { memo, useMemo } from 'react';

import { NewsCard, Social } from 'resources/components';
import { news } from 'resources/data/mocks';

import {
    Body,
    Date,
    FullDescription,
    Header,
    Image,
    MiniDescription,
    Root,
    Share,
    SocialWrapper,
    Text,
    TextWrapper,
    TextWrapperUp,
    Container,
    List,
} from './NewsDetail-styles';
import { NewsDetailProps } from './NewsDetail-types';

export const NewsDetail = memo<NewsDetailProps>((props) => {
    const { post } = props;

    const relatedNews = useMemo(() => news.items.filter((newsItem) => newsItem.url !== post.url).slice(0, 3), [post]);

    if (!post) {
        return <>Новость не найдена</>;
    }

    return (
        <Root>
            <Image src={post.poster} alt={post.title} />

            <Body>
                <Container>
                    <TextWrapperUp>
                        <Header>{post.title}</Header>

                        <MiniDescription>{post.description}</MiniDescription>
                    </TextWrapperUp>

                    <TextWrapper>
                        <Text>
                            {post.fullText?.map((text, index) => <FullDescription key={index}>{text}</FullDescription>)}
                        </Text>
                    </TextWrapper>

                    <Date>{post.date.toLocaleDateString()}</Date>
                </Container>

                <SocialWrapper>
                    <Share>Поделиться</Share>

                    <Social isVertical />
                </SocialWrapper>
            </Body>

            <Header>Читайте также</Header>

            <List>
                {relatedNews.map((relatedPost) => (
                    <NewsCard post={relatedPost} key={relatedPost.url || relatedPost.title} />
                ))}
            </List>
        </Root>
    );
});

NewsDetail.displayName = 'NewsDetail';
