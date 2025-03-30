import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    ${device.less768} {
        flex-wrap: wrap;
    }

    ${device.less768} {
        margin-bottom: 30px;
    }
`;

export const Title = styled(Text)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${font(32, 500)}

    ${device.less1300} {
        ${font(24, 500)}
    }

    ${device.less768} {
        ${font(20, 500)}
        width: 100%;
        margin-bottom: 15px;
    }
`;

export const Body = styled.div<{ $isWide?: boolean }>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    row-gap: 40px;
    width: 100%;

    ${device.less1300} {
        grid-template-columns: ${({ $isWide }) => ($isWide ? '' : 'repeat(2, 2fr)')};
        row-gap: 20px;
        gap: 20px;
    }

    ${device.less768} {
        row-gap: 30px;
        grid-template-columns: repeat(2, 2fr);
        gap: 20px;
    }
`;
