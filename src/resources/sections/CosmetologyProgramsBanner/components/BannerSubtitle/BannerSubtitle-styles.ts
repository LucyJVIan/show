import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Subtitle = styled(Text)`
    ${font(20, 500, 1)}

    ${device.less1300} {
        ${font(18, 500, 1)}
    }

    ${device.less860} {
        ${font(16, 500, 1)}
    }
`;
