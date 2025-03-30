import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 40px;

    ${device.less1300} {
        margin: 30px auto 100px;
    }

    ${device.less768} {
        row-gap: 40px;
        margin: 30px auto 80px;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 310px 860px;
    gap: 6%;

    ${device.less1300} {
        grid-template-columns: 100%;
        gap: 80px;
    }

    ${device.less768} {
        gap: 40px;
    }
`;
