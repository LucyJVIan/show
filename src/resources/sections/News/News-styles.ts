import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    gap: 40px;

    ${device.less1300} {
        gap: 40px;
    }
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1 / -1;
    height: 500px;
    grid-gap: 20px;

    ${device.less1300} {
        height: 400px;
    }

    ${device.less768} {
        height: auto;
        row-gap: 30px;
        grid-template-columns: repeat(auto-fill, 100%);
    }
`;

export const Title = styled(Text)`
    ${font(40, 500, 1.1)}
    letter-spacing: -1px;
    grid-column: 1 / -1;

    ${device.less1300} {
        ${font(32, 500, 1.1)}
    }

    ${device.less860} {
        ${font(24, 500, 1.1)}
        letter-spacing: -0.5px;
    }
`;

export const Banner = styled.div`
    grid-column: 1 / -1;
    height: 360px;
    min-width: 100%;
    min-height: 100%;

    ${device.less860} {
        display: none;
    }
`;

export const Action = styled.div`
    width: 230px;
    grid-column: 1 / -1;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less860} {
        width: 100%;
        grid-row: 3;
    }
`;
