import styled, { css } from 'styled-components';

import { device } from 'resources/constants';
import { font } from 'resources/utils';

import { PhoneProps } from './Phone-types';
import { Text } from '../Text';

export const TextPhone = styled(Text)<PhoneProps>`
    display: inline-block;
    ${font(16, 700)}
    letter-spacing: 0.5px;

    ${(props) =>
        props.fontSize
            ? `font-size: ${props.fontSize};!important`
            : css`
                  ${device.less1300} {
                      ${font(14, 700)}
                  }
                  ${device.less860} {
                      ${font(12, 700)}
                  }
              `};
`;
