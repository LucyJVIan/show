import { memo } from 'react';

import { ModalContent } from 'resources/components';
import { useModal } from 'resources/hooks';

import { modalName } from './ModalOriginalFeedback-constants';
import { Image, ImageWrapper } from './ModalOriginalFeedback-styles';
import { ModalOriginalFeedbackProps } from './ModalOriginalFeedback-types';

export const ModalOriginalFeedback = memo<ModalOriginalFeedbackProps>((props) => {
    const { feedbackImage } = props;

    const { isOpen, handleClose } = useModal();

    return (
        <ModalContent
            isHeadless
            isPaddingInline
            title="Оригинальный отзыв"
            description="Показать оригинальный отзыв"
            isVisible={isOpen(modalName)}
            onClose={() => handleClose(modalName)}
        >
            <ImageWrapper>
                <Image src={feedbackImage} alt="feedback" />
            </ImageWrapper>
        </ModalContent>
    );
});

ModalOriginalFeedback.displayName = 'ModalOriginalFeedback';
