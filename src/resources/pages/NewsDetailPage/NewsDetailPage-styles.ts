import styled from 'styled-components';

import { device, fontAvenirNextCyr } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 100px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};

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
    margin-top: 60px;

    ${device.less768} {
        margin-top: 40px;
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
export const Content = styled.div``;
