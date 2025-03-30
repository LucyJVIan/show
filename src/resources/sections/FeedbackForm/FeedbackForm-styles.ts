import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(20, 700, 1)};
    color: ${colors.blackPrimary};
    background-color: ${colors.white};
    padding: 40px 90px;
    border-radius: 20px;
    background-image: url('/assets/images/molecules2.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    margin-top: 100px;

    ${device.less1300} {
        padding: 40px;
    }

    ${device.less768} {
        background-image: none;
        padding: 30px 20px;
        margin-top: 80px;
    }
`;

export const Header = styled.h2`
    ${font(40, 500)};

    ${device.less1300} {
        font-size: 30px;
    }

    ${device.less768} {
        font-size: 24px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 230px;

    ${device.less768} {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 640px;

    ${device.less1300} {
        max-width: 530px;
    }

    ${device.less768} {
        max-width: 100%;
    }
`;
