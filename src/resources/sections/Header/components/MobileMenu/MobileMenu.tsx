import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HeaderNavigation, IconClose, IconNotepad, IconPhone, ModalTrigger, Phone, Social } from 'resources/components';
import { useModal } from 'resources/hooks';
import { modalNameQuickSubscribe } from 'resources/sections/ModalQuickSubscribe';
import { modalNameSubscribe } from 'resources/sections/ModalSubscribe';

import {
    Root,
    CloseButton,
    Actions,
    ActionItem,
    ActionItemText,
    Navigation,
    Contacts,
    Socials,
    Overlay,
    Container,
    IconWrapper,
} from './MobileMenu-styles';
import { MobileMenuProps } from './MobileMenu-types';

export const MobileMenu = memo<MobileMenuProps>((props) => {
    const { isOpen, onToggle } = props;
    const [menuNode, setMenuNode] = useState<HTMLElement | null>(null);

    const { handleOpen } = useModal();

    useEffect(() => {
        const checkForMobileElement = () => {
            const node = document.getElementById('mobile-menu');

            if (node) {
                setMenuNode(node);
                clearInterval(interval);
            }
        };

        const interval = setInterval(checkForMobileElement, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!menuNode) {
        return null;
    }

    return createPortal(
        <Root $isOpen={isOpen}>
            <Overlay onClick={onToggle} />

            <Container $isOpen={isOpen}>
                <CloseButton onClick={onToggle}>
                    <IconClose width="14.5" height="14.5" />
                </CloseButton>

                <Navigation>
                    <HeaderNavigation onToggle={onToggle} />
                </Navigation>

                <Contacts>
                    <Phone fontSize="16px" />
                </Contacts>

                <Socials>
                    <Social />
                </Socials>

                <Actions>
                    <ModalTrigger asChild onClick={() => handleOpen(modalNameQuickSubscribe)}>
                        <ActionItem href="#">
                            <IconWrapper>
                                <IconPhone />
                            </IconWrapper>

                            <ActionItemText>Быстрая запись</ActionItemText>
                        </ActionItem>
                    </ModalTrigger>

                    <ModalTrigger asChild onClick={() => handleOpen(modalNameSubscribe)}>
                        <ActionItem href="#">
                            <IconWrapper>
                                <IconNotepad />
                            </IconWrapper>

                            <ActionItemText>Записаться на прием</ActionItemText>
                        </ActionItem>
                    </ModalTrigger>
                </Actions>
            </Container>
        </Root>,
        menuNode,
    );
});

MobileMenu.displayName = 'MobileMenu';
