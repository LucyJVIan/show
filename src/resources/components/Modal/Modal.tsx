import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import React, { memo } from 'react';

import {
    DialogOverlay,
    DialogContent,
    ModalInfo,
    Body,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    CloseButton,
} from './Modal-styles';
import { ModalProps } from './Modal-types';
import { IconClose } from '../Icons';

export const ModalContent = memo<ModalProps>((props) => {
    const {
        children,
        title,
        isVisible,
        height,
        background,
        colorIconClose,
        isScrollable,
        description,
        descriptionContainer: Description = ModalDescription,
        onClose,
        isHeadless,
        isPaddingInline,
    } = props;

    if (!isVisible) return null;

    return (
        <Dialog.Portal>
            <DialogOverlay />
            <DialogContent $background={background} $height={height}>
                <Body $isPaddingInline={isPaddingInline} $isScrollable={isScrollable}>
                    <ModalHeader>
                        <CloseButton onClick={onClose} $colorIconClose={colorIconClose}>
                            <IconClose width="25" height="25" fill="red" />
                        </CloseButton>
                    </ModalHeader>

                    <ModalInfo as={isHeadless ? VisuallyHidden : undefined}>
                        <ModalTitle>{title}</ModalTitle>
                        <Description>{description}</Description>
                    </ModalInfo>

                    {children}
                </Body>
            </DialogContent>
        </Dialog.Portal>
    );
});

ModalContent.displayName = 'ModalContent';

export const ModalRoot = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
export const ModalClose = Dialog.Close;
