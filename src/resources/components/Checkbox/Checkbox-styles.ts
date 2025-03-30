import { Root as CheckboxRoot, Indicator } from '@radix-ui/react-checkbox';
import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.label`
    display: flex;
    gap: 10px;
    ${font(16)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    align-items: center;
    cursor: pointer;
    user-select: none;

    ${device.less768} {
        ${font(14)}
    }
`;

export const Wrap = styled(CheckboxRoot)`
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    border: 1px solid ${colors.greenLight};
    flex-shrink: 0;

    &[data-state='checked'] {
        border-color: ${colors.greenPrimary};
    }

    &:hover {
        border-color: ${colors.greenPrimary};
    }
`;

export const IconWrap = styled(Indicator)`
    width: 12px;
    height: 12px;
`;
