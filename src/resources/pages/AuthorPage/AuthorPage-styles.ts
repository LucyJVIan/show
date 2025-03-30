import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 100px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        margin: 30px auto 0;
    }

    ${device.less768} {
        row-gap: 40px;
        margin: 30px auto 80px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ImageWrapper = styled.div`
    width: 530px;
    height: 566px;

    ${device.less768} {
        width: 100%;
        height: auto;
    }
`;

export const Image = styled.img`
    border-radius: 20px;
    width: 530px;
    height: 566px;
    object-fit: cover;

    ${device.less1300} {
        width: 374px;
    }

    ${device.less768} {
        width: 100%;
        height: auto;
    }
`;

export const Header = styled.div`
    ${font(40, 500)};

    ${device.less1300} {
        font-size: 30px;
    }

    ${device.less768} {
        font-size: 24px;
    }
`;

export const Text = styled.div`
    ${font(20, 400)};

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    margin-top: 5px;
    gap: 48px;
    width: auto;
    margin-bottom: 80px;

    ${device.less768} {
        flex-direction: column;
        gap: 30px;
        margin-top: 0;
    }
`;

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 410px;
    gap: 20px;

    ${device.less1300} {
        grid-template-rows: 296px;
        grid-template-columns: 1fr 1fr;
    }

    ${device.less768} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;
