import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 65px;
    max-width: 100%;
    margin: 150px auto 100px;
    position: relative;
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};

    ${device.less1300} {
        margin: 30px auto 100px;
    }

    ${device.less768} {
        row-gap: 40px;
    }
`;

export const MainBanner = styled.div`
    height: 640px;
    margin-top: -260px;

    ${device.less1300} {
        height: 460px;
        margin-top: -180px;
    }

    ${device.less768} {
        height: auto;
        margin-top: 0;
    }
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;

    ${device.less768} {
        gap: 10px;
    }
`;

export const Text = styled.div`
    ${font(20, 400, 1.36)};
    max-width: 80%;

    ${device.less1300} {
        max-width: 100%;
    }
`;

export const TextWrapper = styled.div`
    background-color: white;
    padding: 40px 20% 40px 40px;
    border-radius: 20px;

    ${device.less1300} {
        padding-right: 10%;
    }
    ${device.less768} {
        padding: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;

    ${device.less768} {
        gap: 80px;
    }
`;
