import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    position: relative;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
`;

export const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    margin-top: 40px;

    ${device.less768} {
        grid-template-columns: 100%;
        margin-top: 30px;
    }
`;

export const Title = styled.div`
    ${font(40, 500, 1.1)};
    color: ${colors.blackPrimary};
    width: 50%;

    ${device.less1300} {
        width: 65%;
        font-size: 30px;
    }

    ${device.less768} {
        width: 100%;
        font-size: 24px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 230px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    margin-bottom: 30px;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less768} {
        width: 100%;
    }
`;
