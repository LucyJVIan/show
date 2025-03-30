import styled from 'styled-components';

import { CompanyLogo, LayoutContainer, Link, Text } from 'resources/components';
import { colors, fontAvenirNextCyr } from 'resources/constants';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.footer`
    padding: 40px 0;
`;

export const Wrap = styled(LayoutContainer)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 40px 20px;

    ${device.less1300} {
    }

    ${device.less860} {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px 30px;
    }
`;

const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const BlockLogo = styled(Block)`
    order: 1;
    grid-column: span 3;

    ${device.less1300} {
        order: 1;
        grid-column: span 4;
    }

    ${device.less860} {
        order: 1;
        grid-column: span 4;
    }
`;

export const BlockContact = styled(Block)`
    order: 2;
    grid-column: span 2;

    ${device.less1300} {
        order: 2;
        grid-column: span 3;
    }

    ${device.less860} {
        order: 3;
        grid-column: span 4;
    }
`;

export const BlockSocials = styled(Block)`
    order: 3;
    grid-column: span 2;

    ${device.less1300} {
        order: 3;
        grid-column: span 2;
        justify-content: flex-end;
    }

    ${device.less860} {
        order: 4;
        grid-column: span 4;
        justify-content: flex-start;
    }
`;

export const BlockOfertas = styled(Block)`
    order: 4;
    grid-column: span 3;
    justify-content: flex-end;

    ${device.less1300} {
        order: 5;
        grid-column: span 6;
    }

    ${device.less860} {
        order: 5;
        grid-column: span 4;
        justify-content: flex-start;
    }
`;

export const BlockCopyrights = styled(Block)`
    order: 5;
    grid-column: span 12;

    ${device.less1300} {
        order: 4;
        grid-column: span 6;
    }

    ${device.less860} {
        order: 2;
        grid-column: span 4;
    }
`;

export const FooterLinks = styled.div`
    display: inline-grid;
    gap: 10px;
    text-align: left;

    ${device.less1300} {
        text-align: right;
    }

    ${device.less860} {
        text-align: left;
        padding: 20px 0 0 0;
    }
`;

export const FooterLink = styled(Link)`
    ${font(16, 400)}
    text-decoration: none;
    display: inline-block;
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
`;

export const FooterText = styled(Text)`
    line-height: 2;

    ${device.less860} {
        padding: 20px 0;
    }
`;

export const FooterCompanyLogo = styled(CompanyLogo)`
    width: 220px;
    height: 82px;

    ${device.less860} {
        width: 181px;
        height: 67px;
    }
`;
