import styled from 'styled-components';

import { colors, device } from 'resources/constants';

export const SocialRoot = styled.div`
    display: flex;
    gap: 15px;
`;

export const SocialVerticalWrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 152px;
    background-color: ${colors.white};
    border-radius: 10px;
    border: 1px solid ${colors.greenLight};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 25%);

    ${device.less1300} {
        flex-direction: row;
        height: 65px;
        width: 152px;
    }
`;

export const SocialLink = styled.a`
    padding: 4px;
    cursor: pointer;
    color: ${colors.greenPrimary};

    &:hover {
        transition: color 0.3s ease-in-out;
        color: ${colors.greenDark};
    }
`;
