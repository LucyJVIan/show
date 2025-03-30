import styled from 'styled-components';

import { colors } from 'resources/constants';
import { font } from 'resources/utils';

import { AccordionStyleProps } from '../Accordion-types';

export const Element = styled.li<AccordionStyleProps>`
    ${font(16, 400, 1.36)};
    background-color: ${(props) => (props.$isActive ? `${colors.greenLightWithOpacity}` : 'transparent')};
    padding: 8px 15px;
    border-radius: 40px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.greenLightWithOpacity};
    }
`;
