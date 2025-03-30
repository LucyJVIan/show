import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 40px;

    ${device.less1300} {
        margin: 30px auto 0;
    }

    ${device.less768} {
        row-gap: 40px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    ${device.less1300} {
        flex-direction: column;
    }
`;
