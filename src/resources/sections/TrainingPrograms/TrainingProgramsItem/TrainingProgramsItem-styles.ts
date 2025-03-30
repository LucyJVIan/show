import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div<{ $direction: string }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 30px;
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    cursor: pointer;
    direction: ${({ $direction }) => $direction};
    justify-items: ${({ $direction }) => ($direction === 'ltr' ? 'start' : 'end')};
    align-items: center;

    ${device.less1300} {
    }

    ${device.less768} {
        direction: ltr;
        grid-template-columns: 100%;
        justify-items: start;
    }
`;

export const Container = styled.div``;

export const TextContainer = styled.div<{ $direction: string }>`
    max-width: 510px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: ${(props) => (props.$direction === 'ltr' ? 'flex-start' : 'flex-end')};
    text-align: left;

    ${device.less768} {
        align-items: flex-start;
        max-width: 100%;
        gap: 20px;
        margin-top: 0;
    }
`;

export const MiniDescription = styled.p`
    ${font(20, 400, 1.3)};

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    display: block;
    width: 230px;

    ${device.less768} {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 640px;
    height: 390px;
    border-radius: 20px;

    ${device.less1300} {
        width: 374px;
        height: 260px;
    }

    ${device.less768} {
        width: 100%;
        height: auto;
    }
`;
