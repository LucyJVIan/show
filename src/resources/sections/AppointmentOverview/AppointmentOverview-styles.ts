import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 30px;

    ${device.less1300} {
        grid-template-columns: 1fr 1fr;
        gap: 60px;
    }

    ${device.less860} {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const Actions = styled.div`
    grid-row: 2;
    align-self: end;
    grid-column: 1;
    width: 230px;

    ${device.less1300} {
        width: 200px;
        margin-top: -35px;
        grid-row: 2;
    }

    ${device.less860} {
        width: 100%;
        grid-row: 5;
        margin-top: 10px;
    }
`;

export const Title = styled(Text)`
    ${font(40, 500, 1.1)}

    ${device.less1300} {
        ${font(30, 500, 1.1)}
    }

    ${device.less860} {
        ${font(24, 500, 1.1)}
    }
`;

export const Info = styled.div`
    display: grid;
    gap: 30px;
    grid-column: 1;
    grid-row: 1;

    ${device.less1300} {
        gap: 20px;
    }
`;

export const Description = styled(Text)`
    ${font(16, 400, 1.36)}

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column: 2;

    ${device.less860} {
        grid-column: 1;
        grid-row-start: 2;
        grid-row-end: 5;
    }
`;
