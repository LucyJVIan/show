import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    max-width: 860px;
    gap: 30px;
    border-radius: 20px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        padding: 40px 0;
    }

    ${device.less768} {
        flex-direction: column;
        height: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;

    ${device.less768} {
        height: 240px;
        width: 100%;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0;
    gap: 40px;

    ${device.less768} {
        gap: 30px;
    }
`;

export const TextWrapperUp = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    position: relative;

    ${device.less1300} {
        flex-direction: column;
    }
`;

export const Header = styled.div`
    ${font(32, 500)};
    max-width: 80%;

    ${device.less1300} {
        font-size: 24px;
        max-width: 100%;
    }

    ${device.less768} {
        font-size: 20px;
    }
`;

export const MiniDescription = styled.div`
    ${font(20, 400, 1.36)};
    max-width: 60%;

    ${device.less1300} {
        ${font(16)}
        max-width: 100%;
    }
`;

export const FullDescription = styled.div`
    ${font(16, 400, 1.36)};

    ${device.less1300} {
        ${font(14)}
    }
`;

export const Date = styled.div`
    ${font(14, 400, 1.36)};
    opacity: 0.5;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 80%;

    ${device.less1300} {
        max-width: 90%;
    }
`;

export const Share = styled.div`
    ${font(16)}

    ${device.less768} {
        ${font(14)}
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 90px;
    position: sticky;
    top: 130px;
    max-height: 200px;
    z-index: 4;

    ${device.less1300} {
        align-items: flex-start;
        position: relative;
        top: 0;
    }
`;
