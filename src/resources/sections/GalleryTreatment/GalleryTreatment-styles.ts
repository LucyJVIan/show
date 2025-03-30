import styled from 'styled-components';

import { ModalTrigger, Text } from 'resources/components';
import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 40px;
    width: 100%;
`;

export const Title = styled(Text)`
    ${font(40, 500, 1)}
    grid-row: 1;
    grid-column: 1;
    width: 80%;

    ${device.less1300} {
        ${font(30, 500, 1)}
        width: 100%;
    }

    ${device.less860} {
        ${font(24, 500, 1)}
        grid-row: 1;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`;

export const Actions = styled(ModalTrigger)`
    width: 230px;
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    margin-top: 20px;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less860} {
        width: 100%;
        grid-row: 3;
        grid-column-start: 1;
        grid-column-end: 3;
        align-self: start;
    }
`;

export const Body = styled.div`
    position: relative;
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
    padding: 40px;
    padding-top: 60px;
    border-radius: 20px;
    border: 1px solid ${colors.greenLight};
    background-color: ${colors.white};
    height: 100%;

    ${device.less1300} {
        padding: 40px;
    }

    ${device.less860} {
        grid-template-columns: repeat(1, 1fr);
        padding: 40px 20px;
    }
`;

export const BodyLine = styled.div`
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: ${colors.greenLight};
    right: 50%;
    top: 0;
    ${device.less860} {
        width: 100%;
        height: 1px;
        top: 50%;
        right: 0;
    }
`;
