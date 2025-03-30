import { styled } from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    width: 1300px;
    margin: 0 auto;

    ${device.less1300} {
        width: 860px;
    }

    ${device.less860} {
        width: 100%;
        padding: 0 15px;
    }
`;
