import { useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';

import { Report } from 'resources/types/Report';

import { Body, Date, Description, Header, Image, Root, Tag, TextWrapper } from './ReportCard-styles';

export const ReportCard = memo((report: Report) => {
    const { tag, title, description, date, image, slug } = report;
    const router = useRouter();

    const handleCardClick = useCallback(() => {
        router.push(`/publications/${slug}`);
    }, [router, slug]);

    return (
        <Root onClick={handleCardClick}>
            <Image src={image} alt={tag} />

            <Body>
                <Tag>{tag}</Tag>

                <TextWrapper>
                    <Header>{title}</Header>

                    <Description>{description}</Description>
                </TextWrapper>

                <Date>{date}</Date>
            </Body>
        </Root>
    );
});

ReportCard.displayName = 'ReportCard';
