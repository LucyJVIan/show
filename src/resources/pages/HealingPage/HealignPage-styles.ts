import { styled } from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    margin-bottom: 100px;

    ${device.less768} {
        margin-bottom: 60px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 100px;

    ${device.less1300} {
        margin-top: 30px;
    }

    ${device.less768} {
        row-gap: 40px;
        margin-bottom: 60px;
    }
`;
