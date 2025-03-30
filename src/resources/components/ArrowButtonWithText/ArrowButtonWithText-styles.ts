import { styled } from 'styled-components';

import { device, fontAvenirNextCyr } from 'resources/constants';
import { colors } from 'resources/constants';
import { font } from 'resources/utils';

export const IconWrap = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    transition: transform 0.3s;

    svg {
        width: 10px;
        height: 8px;
    }
`;

export const Root = styled.button`
    ${font(16)}
    display: inline-flex;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    background-color: ${colors.transparent};
    border: none;
    white-space: nowrap;
    padding: 0;
    gap: 7px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    &:hover ${IconWrap} {
        transform: translateX(4px);
    }

    ${device.less768} {
        ${font(14)}
    }
`;

export const BackWrapper = styled.button`
    flex-direction: row-reverse;
    align-items: center;
    ${font(20, 500)}

    &:hover ${IconWrap} {
        transform: translateX(-4px);
    }

    ${IconWrap} svg {
        transform: rotate(180deg);
        width: 14px;
        height: 11px;
        object-fit: contain;
    }

    ${device.less768} {
        ${font(16, 500)}
    }
`;
