'use client';

import { memo } from 'react';

import { Phone, Social, Email } from 'resources/components';

import {
    BlockContact,
    BlockCopyrights,
    BlockLogo,
    BlockOfertas,
    BlockSocials,
    FooterCompanyLogo,
    Root,
    FooterText,
    Wrap,
    FooterLinks,
    FooterLink,
} from './Footer-styles';

export const Footer = memo(() => {
    return (
        <Root>
            <Wrap>
                <BlockLogo>
                    <FooterCompanyLogo />
                </BlockLogo>

                <BlockContact>
                    <Phone fontSize="16px" />
                </BlockContact>

                <BlockContact>
                    <Email />
                </BlockContact>

                <BlockSocials>
                    <Social />
                </BlockSocials>

                <BlockOfertas>
                    <FooterLinks>
                        <FooterLink href="#">Политика конфиденциальности</FooterLink>
                        <FooterLink href="#">Публичная оферта</FooterLink>
                    </FooterLinks>
                </BlockOfertas>

                <BlockCopyrights>
                    <FooterText>
                        © 2024. Все права защищены.
                        <br />
                        Реквизиты юридического лица (ИП/ООО)
                    </FooterText>
                </BlockCopyrights>
            </Wrap>
        </Root>
    );
});

Footer.displayName = 'Footer';
