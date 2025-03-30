import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { ArrowButtonWithText, Social } from 'resources/components';

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
} from './Publication-style';
import { PublicationProps } from './Publication-types';

export const Publication = memo<PublicationProps>((props) => {
    const { tag, title, description, date, image, fullText } = props.report;

    const router = useRouter();

    return (
        <Root>
            <Body>
                <ArrowButtonWithText onClick={() => router.back()} isBack>
                    Назад
                </ArrowButtonWithText>

                <TextWrapperUp>
                    <Header>{title}</Header>

                    <MiniDescription>{description}</MiniDescription>
                </TextWrapperUp>

                <Image src={image} alt={tag} />

                <TextWrapper>
                    <Text>{fullText?.map((text, index) => <FullDescription key={index}>{text}</FullDescription>)}</Text>

                    <SocialWrapper>
                        <Share>Поделиться</Share>

                        <Social isVertical />
                    </SocialWrapper>
                </TextWrapper>

                <Date>{date}</Date>
            </Body>
        </Root>
    );
});

Publication.displayName = 'Publication';
