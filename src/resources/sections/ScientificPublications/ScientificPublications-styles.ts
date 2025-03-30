import styled from 'styled-components';

import { Text } from 'resources/components';
import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    grid-template-columns: 43% 53%;
    gap: 40px;

    ${device.less1300} {
        grid-template-columns: 53% 43%;
    }

    ${device.less860} {
        grid-template-columns: 100%;
        gap: 30px;
    }
`;

export const Title = styled(Text)`
    width: 80%;
    grid-row: 1;
    ${font(40, 500, 1.1)}

    ${device.less1300} {
        ${font(30, 500, 1.1)}
    }

    ${device.less768} {
        ${font(24, 500, 1.1)}
        width: 100%;
    }
`;

export const Subtitle = styled(Text)`
    margin-bottom: 20px;
    ${font(20, 500, 1)}

    ${device.less1300} {
        ${font(18, 500, 1)}
    }

    ${device.less860} {
        ${font(16, 500, 1)}
    }
`;

export const Action = styled.div`
    width: 230px;
    grid-row: 2;
    grid-column: 2;
    align-self: end;
    ${device.less1300} {
        width: 200px;
    }

    ${device.less860} {
        width: 100%;
        grid-row: 4;
        grid-column: 1;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    grid-row: 2;
    grid-column: 1;
    ${device.less860} {
        grid-row: 3;
    }
`;

export const ParagraphContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

export const ParagraphText = styled(Text)`
    ${font(16, 400, 1.36)}

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }

    color: ${colors.blackPrimary};
`;

export const Info = styled.div`
    grid-row: 2;
    grid-column: 2;

    ${device.less860} {
        grid-column: 1;
        grid-row: 2;
    }
`;
