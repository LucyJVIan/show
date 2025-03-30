import styled, { css } from 'styled-components';

import { Link } from 'resources/components';
import { colors, device, fontRoboto } from 'resources/constants';
import { font } from 'resources/utils';

import { MobileMenuProps } from './MobileMenu-types';

export const Navigation = styled.div<{ $isOpen?: MobileMenuProps['isOpen'] }>`
    display: flex;
    gap: 25px;
    margin-top: 6px;
    margin-left: 38px;

    ${device.less1300} {
        width: 122px;
        display: grid;
        justify-items: start;
        gap: 15px;
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 40px;
    }
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin: 26px 20px 26px 0;
`;

export const Overlay = styled.span`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.27);
    pointer-events: none;
`;

export const Root = styled.div<{ $isOpen?: MobileMenuProps['isOpen'] }>`
    opacity: 0;
    display: none;

    ${device.less1300} {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        opacity: 0.0001;
        min-height: 100dvh;
        transition: opacity 0.3s ease-in-out;
        pointer-events: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: right;
        z-index: 1001;
        ${(props) =>
            props.$isOpen &&
            css`
                opacity: 1;
                pointer-events: all;
            `}
    }
`;

export const Container = styled.div<{ $isOpen?: MobileMenuProps['isOpen'] }>`
    width: 248px;
    height: 100%;
    background-color: ${colors.white};
    padding-left: 20px;
    transform: translateX(101%);
    transition: transform 0.3s ease-in-out;
    overflow-y: scroll;
    ${(props) =>
        props.$isOpen &&
        css`
            transform: translateX(0);
        `}
`;

export const IconWrapper = styled.div`
    color: ${colors.greenPrimary};
    height: 18px;
    width: 18px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 30%, ${colors.transparent} 70%);
        z-index: 2;
    }

    svg {
        z-index: 1;
    }
`;

export const Contacts = styled.div`
    margin-left: 70px;

    ${device.less1300} {
        margin-left: 0;
    }
`;

export const Socials = styled.div`
    margin-top: 15px;
`;

export const Actions = styled.div`
    margin-top: 30px;
    display: grid;
    gap: 15px;
`;

export const ActionItem = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 11px;
    text-decoration: none;
    color: ${colors.blackPrimary};
`;

export const ActionItemText = styled.span`
    ${font(14, 400, 1)}
    font-family: ${fontRoboto.style.fontFamily};
    margin-top: 3px;
`;
