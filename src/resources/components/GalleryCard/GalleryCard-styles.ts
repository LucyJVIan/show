import { styled } from 'styled-components';

import { Link, Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const ImageContainer = styled(Link)`
    height: 100%;
    width: 100%;
`;

export const Image = styled.img<{ $isWide?: boolean }>`
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    border-radius: 5px;
    margin-bottom: 15px;
    object-fit: cover;

    ${device.less1300} {
        aspect-ratio: 11 / 8;
    }

    ${device.less768} {
        aspect-ratio: ${({ $isWide }) => ($isWide ? 11 / 8 : 1)};
    }
`;

export const TitleImage = styled(Text)`
    ${font(20, 500, 1)}

    ${device.less768} {
        ${font(14, 500, 1)}
    }
`;
