import { styled } from 'styled-components';

import { device } from 'resources/constants';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    margin-bottom: 100px;

    ${device.less768} {
        margin-bottom: 60px;
    }
`;

export const MainBanner = styled.div`
    height: 607px;
    margin-bottom: 130px;

    ${device.less1300} {
        height: 345px;
        margin-bottom: 65px;
    }

    ${device.less768} {
        height: 305px;
        margin-bottom: 80px;
    }
`;
