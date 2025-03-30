import { Fragment } from 'react';

import { Button, LayoutContainer, Link } from 'resources/components';

import { ScientificPublicationsCard } from './components/ScientificPublicationsCard';
import { publications } from './ScientificPublications-constants';
import {
    Root,
    Title,
    Cards,
    Info,
    Subtitle,
    Action,
    ParagraphContainer,
    ParagraphText,
} from './ScientificPublications-styles';

export const ScientificPublications = () => {
    return (
        <LayoutContainer>
            <Root>
                <Title>{publications.title}</Title>

                <Cards>
                    {publications.cards.map((card, index) => (
                        <Fragment key={index}>
                            <ScientificPublicationsCard
                                href={card.link}
                                key={card.title}
                                title={card.title}
                                type={card.type}
                                date={card.date}
                            />
                        </Fragment>
                    ))}
                </Cards>
                <Info>
                    <Subtitle>{publications.info.title}</Subtitle>

                    <ParagraphContainer>
                        {publications.info.paragraphs?.map((text, index) => (
                            <ParagraphText key={index}>{text}</ParagraphText>
                        ))}
                    </ParagraphContainer>
                </Info>
                <Action>
                    <Link href="#">
                        <Button mode="secondary">Перейти в раздел</Button>
                    </Link>
                </Action>
            </Root>
        </LayoutContainer>
    );
};

ScientificPublications.displayName = 'ScientificPublications';
