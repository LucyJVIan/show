import { styled, css } from 'styled-components';

import { ButtonProps } from 'resources/components';
import { device, fontAvenirNextCyr } from 'resources/constants';
import { colors } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.button<{ $mode?: ButtonProps['mode'] }>`
    width: 100%;
    height: 62px;
    padding: 0 15px;
    ${font(16, 400)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    border-radius: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    border: 2px solid ${colors.greenPrimary};
    transition:
        background 0.2s,
        color 0.2s,
        border-color 0.2s;

    ${(props) => {
        switch (props.$mode) {
            case 'secondary':
                return css`
                    color: ${colors.blackPrimary};
                    background-color: ${colors.transparent};
                `;

            case 'secondary white':
                return css`
                    color: ${colors.white};
                    background-color: ${colors.transparent};
                `;

            case 'accent':
            default:
                return css`
                    color: ${colors.white};
                    background-color: ${colors.greenPrimary};
                `;
        }
    }}
    &:hover {
        border-color: ${colors.greenDark};
        ${(props) => {
            switch (props.$mode) {
                case 'secondary':
                    return css``;

                case 'accent':
                default:
                    return css`
                        background-color: ${colors.greenDark};
                    `;
            }
        }}
    }

    &:disabled {
        cursor: not-allowed;
        border-color: ${colors.grayPrimary};

        ${(props) => {
            switch (props.$mode) {
                case 'secondary':
                    return css`
                        color: ${colors.grayLight};
                    `;

                case 'accent':
                default:
                    return css`
                        background-color: ${colors.grayPrimary};
                    `;
            }
        }}
    }

    ${device.less1300} {
        height: 50px;
        font-size: 14px;
    }
`;
