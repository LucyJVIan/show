import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

import { SliderBodyProps } from './SliderStaff-types';

export const Root = styled.div<{ $isMainRounded?: boolean }>`
    width: 100%;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;

    ${device.less768} {
        border-radius: ${(props) => (props.$isMainRounded ? '0' : '20px')};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;

    ${device.less860} {
        padding-bottom: 32px;
    }
`;

export const Title = styled(Text)`
    ${font(40, 500)}

    ${device.less1300} {
        ${font(30, 500)}
    }

    ${device.less860} {
        ${font(24, 500)}
    }
`;

export const Body = styled.div<SliderBodyProps>`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    transform: translateX(${(props) => props.$translateX});
`;

export const Actions = styled.div`
    display: flex;
    gap: 15px;

    ${device.less860} {
        gap: 20px;
    }
`;
