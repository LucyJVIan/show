import { CSSProperties } from 'react';
import { css } from 'styled-components';

export const font = (
    fontSize: number = 18,
    fontWeight: CSSProperties['fontWeight'] = 400,
    lineHeight: CSSProperties['lineHeight'] = 1.4,
) => css`
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
`;
