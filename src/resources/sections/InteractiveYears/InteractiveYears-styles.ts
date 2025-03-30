import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    width: 100%;
    height: auto;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less768} {
        row-gap: 40px;
    }
`;

export const YearsWrapper = styled.div`
    width: 100%;
    height: 540px;
    position: relative;
    overflow-x: scroll;
    transition: all 0.5s ease;

    &::-webkit-scrollbar {
        display: none;
    }

    ${device.less1300} {
        height: 520px;
    }

    ${device.less768} {
        height: 440px;
    }
`;

export const InteractiveBlock = styled.div`
    position: absolute;
    width: 1300px;

    ${device.less768} {
        width: 900px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 80px;

    &:before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${colors.greenLight};
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 0;
    }

    ${device.less1300} {
        padding: 0 40px;
        justify-content: center;
        gap: 4%;
    }

    ${device.less768} {
        padding: 0 40px;
        justify-content: center;
        gap: 6%;
    }
`;

export const ImageBlock = styled.div``;

export const TextWrapper = styled.div`
    max-width: 50%;

    ${device.less1300} {
        max-width: 70%;
        font-size: 30px;
    }

    ${device.less768} {
        max-width: 100%;
        font-size: 24px;
    }
`;
