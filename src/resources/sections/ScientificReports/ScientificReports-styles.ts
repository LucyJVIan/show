import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${device.less1300} {
        margin-top: 40px;
    }

    ${device.less768} {
        width: 100%;
    }
`;
