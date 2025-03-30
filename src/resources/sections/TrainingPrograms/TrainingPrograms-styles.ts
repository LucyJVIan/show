import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(20, 700, 1)};
    color: ${colors.blackPrimary};
    cursor: pointer;

    ${device.less1300} {
        font-size: 16px;
    }

    ${device.less768} {
        font-size: 11px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
    width: 200px;

    ${device.less768} {
        width: 100%;
    }
`;
