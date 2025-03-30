import styled from 'styled-components';

import { font } from 'resources/utils';

import { Text } from '../Text';

export const TextEmail = styled(Text)`
    display: inline-block;
    ${font(16, 700)}
    letter-spacing: 0.5px;
`;
