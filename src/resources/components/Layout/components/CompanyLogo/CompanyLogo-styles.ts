import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    width: 190px;
    height: 70px;
    align-items: center;
    justify-content: space-between;

    ${device.less1300} {
        width: 160px;
        height: 60px;
    }

    ${device.less860} {
        width: 130px;
        height: 48px;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;
