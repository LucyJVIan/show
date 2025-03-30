'use client';

import { memo } from 'react';

import { Phone, IconBurger, HeaderActions, HeaderNavigation, ModalRoot, CompanyLogo } from 'resources/components';
import { ModalQuickSubscribe } from 'resources/sections';

import { MobileMenu } from './components';
import { useMobileMenu } from './Header-hooks';
import { MobileMenuToggler, Root, Navigation, Actions, Primary, Secondary } from './Header-styles';
import { ModalSubscribe } from '../ModalSubscribe';

export const Header = memo(() => {
    const { isMenuOpen, handleMenuToggle } = useMobileMenu();

    return (
        <ModalRoot>
            <ModalSubscribe />

            <ModalQuickSubscribe />

            <Root>
                <Primary>
                    <CompanyLogo />

                    <Navigation>
                        <HeaderNavigation />
                    </Navigation>
                </Primary>

                <Secondary>
                    <Phone />

                    <Actions>
                        <HeaderActions />
                    </Actions>

                    <MobileMenuToggler>
                        <IconBurger onClick={handleMenuToggle} />
                    </MobileMenuToggler>
                </Secondary>
            </Root>

            <MobileMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        </ModalRoot>
    );
});

Header.displayName = 'Header';
