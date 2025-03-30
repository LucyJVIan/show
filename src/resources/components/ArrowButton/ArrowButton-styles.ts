import { styled, css } from 'styled-components';

import { colors, device } from 'resources/constants';

export const Root = styled.button`
    position: relative;
    background-color: ${colors.greenPrimary};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: ${colors.greenDark};
    }

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed;
            background-color: ${colors.grayPrimary}!important;
        `}

    ${device.less860} {
        width: 30px;
        height: 30px;
    }
`;

export const RootIcon = styled.div`
    width: 12px;
    justify-content: center;
    align-items: center;
    display: flex;

    ${device.less860} {
        width: 8px;
    }
`;
