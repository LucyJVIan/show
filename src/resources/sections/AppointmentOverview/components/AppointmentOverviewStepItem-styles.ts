import styled from 'styled-components';

import { Text } from 'resources/components';
import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    align-items: center;
    height: 104px;
    background-color: ${colors.white};
    margin: 5px 0;
    border: 1px solid ${colors.greenLight};
    border-radius: 20px;
    flex: 1 1 auto;

    ${device.less1300} {
        height: 80px;
    }

    ${device.less860} {
        height: 66px;
    }
`;

export const Step = styled(Text)`
    ${font(40, 500)}
    color: ${colors.greenPrimary};
    margin: 0 30px;

    ${device.less1300} {
        ${font(30, 500)}
        margin-left: 30px;
        margin-right: 15px;
    }

    ${device.less860} {
        ${font(24, 500)}
        margin: 0 20px;
    }
`;

export const Title = styled(Text)`
    ${font(16, 400, 1.36)}
    width: 70%;

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;
