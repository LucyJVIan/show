import { memo, useCallback, useState } from 'react';

import { IconLoupe, ModalRoot, ModalTrigger } from 'resources/components';
import { useModal } from 'resources/hooks';
import { ModalOriginalFeedback } from 'resources/sections';

import { textLengthExpandSize } from './FeedbackBoxItem-constants';
import {
    Root,
    HeaderWrapper,
    Title,
    Procedure,
    DateOfFeedback,
    FooterWrapper,
    ProcedureFeedback,
    TextFeedbackGroup,
    ReadMoreButton,
    TextFeedbackContainer,
    ItemWrapper,
    WhatchOriginalFeedback,
    UnderItem,
} from './FeedbackBoxItem-styles';
import { FeedbackBoxItemProps } from './FeedbackBoxItem-types';

export const FeedbackBoxItem = memo<FeedbackBoxItemProps>((props) => {
    const { name, text, date, procedure, feedbackImage, isFull } = props;

    const [expanded, setExpanded] = useState(false);

    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen('originalFeedback');
    }, [handleOpen]);

    return (
        <ModalRoot>
            {feedbackImage && <ModalOriginalFeedback feedbackImage={feedbackImage} />}

            <ItemWrapper>
                <Root $expanded={isFull || expanded}>
                    <TextFeedbackGroup>
                        <HeaderWrapper>
                            <Title>{name}</Title>

                            <DateOfFeedback>{date}</DateOfFeedback>
                        </HeaderWrapper>

                        {isFull ? (
                            <TextFeedbackContainer $expanded>{text}</TextFeedbackContainer>
                        ) : (
                            <>
                                <TextFeedbackContainer $expanded={expanded}>{text}</TextFeedbackContainer>

                                {text.length > textLengthExpandSize &&
                                    (expanded ? (
                                        <ReadMoreButton onClick={() => setExpanded(false)}>Скрыть</ReadMoreButton>
                                    ) : (
                                        <ReadMoreButton onClick={() => setExpanded(true)}>
                                            ... Читать далее
                                        </ReadMoreButton>
                                    ))}
                            </>
                        )}
                    </TextFeedbackGroup>

                    <FooterWrapper>
                        <ProcedureFeedback>Отзыв о процедуре</ProcedureFeedback>

                        <Procedure href="#">{procedure}</Procedure>
                    </FooterWrapper>
                </Root>

                <UnderItem>
                    <IconLoupe />

                    <ModalTrigger onClick={handleOpenClick} asChild>
                        <WhatchOriginalFeedback>Смотреть оригинал отзыва</WhatchOriginalFeedback>
                    </ModalTrigger>
                </UnderItem>
            </ItemWrapper>
        </ModalRoot>
    );
});

FeedbackBoxItem.displayName = 'FeedbackBoxItem';
