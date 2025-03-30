import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: grid;
    margin-top: 40px;
    gap: 40px;
    row-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    padding-right: 10px;
    width: 100%;

    ${device.less1300} {
        row-gap: 40px;
        column-gap: 20px;
        margin-top: 0;
    }

    ${device.less768} {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 26px;
        column-gap: 10px;
    }
`;
