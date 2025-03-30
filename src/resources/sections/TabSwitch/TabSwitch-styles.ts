import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(20, 500, 1)};
    color: ${colors.blackPrimary};
    cursor: pointer;

    ${device.less1300} {
        font-size: 16px;
    }

    ${device.less768} {
        font-size: 11px;
    }
`;

export const Tab = styled.div<{ $isActive?: boolean }>`
    text-transform: uppercase;
    width: 50%;
    text-align: center;
    padding: 20px;
    background-color: ${({ $isActive }) => ($isActive ? colors.greenLight : colors.transparent)};
    border: 1px solid ${colors.greenLight};
    transition: background 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
        border-radius: 61px 0 0 61px;
    }

    &:last-child {
        border-radius: 0 61px 61px 0;
    }

    ${device.less768} {
        padding: 18px;
    }
`;
