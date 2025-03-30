import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(14, 400, 1.36)};
    flex-wrap: wrap;
    color: ${colors.blackPrimary};

    ${device.less768} {
        margin-top: 0;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    padding-bottom: 5px;

    svg {
        line-height: 136%;
    }

    ${device.less1300} {
        padding-bottom: 4px;
    }
`;

export const PageName = styled.div`
    ${font(14, 400, 1.36)};
    color: ${colors.blackPrimary};

    ${device.less768} {
        font-size: 12px;
    }
`;

export const Title = styled.p`
    ${font(14, 400, 1.36)};
    color: ${colors.blackPrimary};

    ${device.less768} {
        font-size: 12px;
    }

    &:hover {
        filter: brightness(0.7);
    }
`;
