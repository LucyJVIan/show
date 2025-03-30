import styled from 'styled-components';

import { Text, Link } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    width: 100%;
    min-height: 70dvh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${device.less768} {
        align-items: stretch;
        flex-direction: column;
    }
`;

export const Body = styled.div`
    display: grid;
    row-gap: 30px;
`;

export const Title = styled(Text)`
    ${font(258, 500, 1.1)}
    width: 100%;
    text-align: center;

    ${device.less1300} {
        ${font(200, 500, 1.1)}
    }

    ${device.less768} {
        ${font(140, 500, 1.1)}
    }
`;

export const NotFoundLink = styled(Link)`
    width: 230px;
    margin: auto;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less768} {
        width: 100%;
    }
`;
