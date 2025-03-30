import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 100px;

    ${device.less1300} {
        margin: 30px auto 0;
    }

    ${device.less768} {
        row-gap: 40px;
        margin: 30px auto 80px;
    }
`;

export const NewsCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    column-gap: 20px;

    ${device.less768} {
        grid-template-columns: 100%;
        row-gap: 30px;
    }
`;

export const Container = styled.div`
    &:first-child {
        grid-column: 1/4;

        ${device.less768} {
            grid-column: 1;
        }
    }
`;

export const ButtonWrapper = styled.div`
    width: 230px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    margin-bottom: 30px;
    grid-column: 2;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less768} {
        width: 100%;
        grid-column: 1;
        margin-bottom: 0;
    }
`;
