import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';

export const Root = styled.div`
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    margin: 150px auto 100px;

    ${device.less1300} {
        margin: 30px auto 100px;
    }

    ${device.less768} {
        row-gap: 40px;
        margin: 30px auto 80px;
    }
`;

export const Div = styled.div``;

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    justify-content: flex-start;
`;

export const Block = styled.div``;

export const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 60px 40px 40px;
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

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 310px 860px;
    gap: 6%;
    position: relative;

    ${device.less1300} {
        grid-template-columns: 100%;
        gap: 40px;
    }
`;

export const Components = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    ${device.less768} {
        gap: 30px;
    }
`;
