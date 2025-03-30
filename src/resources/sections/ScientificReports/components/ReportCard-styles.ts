import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    max-width: 860px;
    gap: 30px;
    height: 300px;
    background-color: ${colors.white};
    border-radius: 20px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    cursor: pointer;

    ${device.less768} {
        flex-direction: column;
        height: auto;
    }
`;

export const Image = styled.img`
    width: auto;
    height: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 20px;

    ${device.less768} {
        width: 100%;
        height: auto;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 40px 80px 40px 0;

    ${device.less768} {
        padding: 40px 50px 40px 0;
    }

    ${device.less768} {
        padding: 0 20px 30px;
        gap: 30px;
    }
`;

export const Tag = styled.div`
    ${font(16, 400, 1.36)};
    background-color: ${colors.greenLightWithOpacity};
    padding: 8px 15px;
    border-radius: 40px;
    width: 100px;

    ${device.less1300} {
        font-size: 14px;
        text-align: center;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Header = styled.div`
    ${font(20, 500)};

    ${device.less1300} {
        font-size: 18px;
    }

    ${device.less768} {
        font-size: 16px;
    }
`;

export const Description = styled.div`
    ${font(16, 400, 1.36)};
`;

export const Date = styled.div`
    ${font(14, 400, 1.36)};
    opacity: 0.5;
`;
