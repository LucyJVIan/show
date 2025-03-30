import { styled, css } from 'styled-components';

import { device, fontAvenirNextCyr } from 'resources/constants';
import { colors } from 'resources/constants';
import { font } from 'resources/utils';

import { InputProps } from './Input-types';

export const InputMessage = styled.div`
    position: relative;
    color: ${colors.redPrimary};
    ${font(12, 400, 1.3)}
    text-align: right;
    margin: 0;
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};

    ${device.less860} {
        text-align: left;
    }
`;

export const InputContainer = styled.div<InputProps>`
    display: grid;
    gap: 7px;
`;

export const InputTextField = styled.input<InputProps>`
    width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(16)}
    padding: 17px 25px;
    outline: none;
    background-color: ${colors.whiteGhost};
    color: ${colors.blackPrimary};
    border-radius: 5px;
    border: 1px solid ${colors.greenLight};

    &:focus {
        border: 1px solid ${colors.greenPrimary};
    }

    &:not(:placeholder-shown):valid {
        border: 1px solid ${colors.greenPrimary};
    }

    ${(props) =>
        props.errorMessage &&
        css`
            border: 1px solid ${colors.redPrimary};
        `}

    ${device.less768} {
        padding: 12px 25px;
    }
`;
