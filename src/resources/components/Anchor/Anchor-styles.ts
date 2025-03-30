import { styled, css } from 'styled-components';

import { colors, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

import { Link, LinkProps } from '../Link';

export const Anchor = styled(Link)<LinkProps>`
    ${font(14, 400)}
    position: relative;
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    white-space: nowrap;
    transition: all 0.3s;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        height: 2px;
        width: 0;
        background-color: ${colors.greenPrimary};
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    ${(props) =>
        props.disabled &&
        css`
            color: ${colors.grayLight};
            cursor: not-allowed;
            &:hover {
                color: ${colors.grayLight};
                text-decoration: none;
            }
        `}
`;
