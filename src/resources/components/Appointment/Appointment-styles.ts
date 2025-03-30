import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div<{ $image: string }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.white};
    background-image: ${(props) => `url(${props.$image})`};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px;
    position: relative;
    border-radius: 20px;

    &:before {
        content: '';
        height: 100%;
        width: 100%;
        background: -webkit-linear-gradient(90deg, rgb(0, 0, 0), ${colors.transparent});
        background: -moz-linear-gradient(90deg, rgb(0, 0, 0), ${colors.transparent});
        background: linear-gradient(90deg, rgb(0, 0, 0), ${colors.transparent});
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 20px;
    }

    ${device.less1300} {
        padding: 20px;
    }

    ${device.less768} {
        row-gap: 40px;
    }
`;

export const Header = styled.div`
    ${font(32, 500)};
    margin-bottom: 30px;

    ${device.less1300} {
        font-size: 24px;
    }

    ${device.less768} {
        font-size: 20px;
    }
`;

export const Text = styled.div`
    ${font(20, 400)};

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const TextContainer = styled.div`
    z-index: 1;
    max-width: 70%;

    ${device.less1300} {
        max-width: 100%;
    }
`;

export const ButtonsWrapper = styled.div`
    z-index: 1;
    display: flex;
    gap: 20px;

    ${device.less768} {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    width: 230px;

    ${device.less1300} {
        width: 150px;
    }

    ${device.less768} {
        width: 100%;
    }
`;
