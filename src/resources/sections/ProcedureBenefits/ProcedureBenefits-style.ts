import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    row-gap: 20px;
    column-gap: 50px;

    ${device.less768} {
        grid-template-columns: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Image = styled.img`
    ${device.less768} {
        width: 20px;
    }
`;
