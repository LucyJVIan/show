import styled from 'styled-components';

import { Social } from 'resources/components';
import { colors, fontRoboto } from 'resources/constants';
import { font } from 'resources/utils';

export const HeaderContactItem = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    width: 65px;
    height: 40px;
    text-decoration: none;
`;

export const HeaderSocialList = styled(Social)`
    flex-direction: column;
    gap: 20px;
    padding: 22px;
    background: ${colors.white};
    border-radius: 10px;
    border: 1px solid ${colors.greenLight};
`;

export const HeaderContactItemText = styled.span`
    ${font(10, 400, 1)}
    font-family: ${fontRoboto.style.fontFamily};
    text-align: center;
    color: ${colors.blackPrimary};
`;

export const IconWrapper = styled.div`
    color: ${colors.greenPrimary};
    height: 18px;
    width: 18px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 30%, ${colors.transparent} 70%);
        z-index: 2;
    }

    svg {
        z-index: 1;
    }
`;
