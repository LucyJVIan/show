import Link from 'next/link';
import styled from 'styled-components';

import { Text } from 'resources/components';
import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled(Link)`
    background: ${colors.white};
    height: 160px;
    width: 100%;
    padding: 30px;
    align-items: center;
    border-radius: 20px;
    border: 1px solid ${colors.greenLight};
    ${device.less1300} {
        height: 140px;
    }
`;

export const Body = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;
    align-items: center;
`;

export const Type = styled(Text)`
    padding: 9px 20px;
    color: ${colors.blackPrimary};
    background-color: ${colors.greenLight}50;
    border-radius: 50px;
    ${font(16, 400, 1.36)}

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;

export const Title = styled(Text)`
    ${font(32, 500, 1.1)}

    ${device.less1300} {
        ${font(24, 500, 1.1)}
    }

    ${device.less860} {
        ${font(20, 500, 1.1)}
    }
`;

export const DateText = styled(Text)`
    ${font(14, 400, 1.36)}
    color: ${colors.blackPrimary};
`;
