import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 65px;
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
export const TextBold = styled.p`
    ${font(20, 500)};

    ${device.less1300} {
        font-size: 18px;
    }

    ${device.less1300} {
        font-size: 16px;
    }
`;

export const TextMedium = styled.p`
    ${font(16, 400)};

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const Info = styled.p`
    ${font(14, 400)};
    opacity: 0.5;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 48px;
    width: auto;
    justify-content: space-between;

    ${device.less768} {
        flex-direction: column;
        gap: 30px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const MapWrapper = styled.iframe`
    border-radius: 40px;
    overflow: hidden;
    height: auto;
    width: 860px;
    display: flex;
    justify-content: center;

    ${device.less1300} {
        width: 374px;
        height: 324px;
    }

    ${device.less768} {
        width: auto;
        height: 300px;
    }
`;

export const Contacts = styled.div`
    display: flex;
    gap: 38px;
`;

export const Text = styled.div`
    ${font(20, 400)};

    ${device.less1300} {
        font-size: 14px;
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
