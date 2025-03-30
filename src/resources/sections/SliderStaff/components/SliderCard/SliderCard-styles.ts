import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    width: calc(50% - 30px);
    align-items: flex-start;

    ${device.less860} {
        width: calc(100% - 30px);
    }
`;

export const IconWrap = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    ${device.less768} {
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
`;

export const Content = styled.div`
    flex: 1;
`;

export const Title = styled(Text)`
    ${font(20, 500, 1)}

    ${device.less1300} {
        ${font(18, 500, 1)}
    }

    ${device.less860} {
        ${font(16, 500, 1)}
    }
`;

export const Description = styled(Text)`
    margin: 10px 0 0;
    ${font(16, 400, 1.36)}
    ${device.less1300} {
        width: 80%;
        ${font(14, 400, 1.36)}
    }
`;
