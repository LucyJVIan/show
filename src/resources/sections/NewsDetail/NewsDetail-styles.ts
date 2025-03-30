import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    max-width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    position: relative;

    ${device.less768} {
        row-gap: 40px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 20px;

    ${device.less768} {
        height: 240px;
        width: 100%;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;

    ${device.less1300} {
        flex-direction: column;
        gap: 40px;
    }

    ${device.less768} {
        gap: 30px;
        margin-bottom: 40px;
    }
`;

export const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left: 140px;

    ${device.less1300} {
        width: 100%;
        margin-left: 0;
    }
`;

export const TextWrapperUp = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    width: 635px;

    ${device.less1300} {
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 635px;
    gap: 40px;

    ${device.less1300} {
        flex-direction: column;
        width: 100%;
    }
`;

export const Header = styled.div`
    ${font(40, 500)};
    max-width: 80%;

    ${device.less1300} {
        font-size: 30px;
        max-width: 100%;
    }

    ${device.less768} {
        font-size: 24px;
    }
`;

export const MiniDescription = styled.div`
    ${font(20, 400, 1.36)};

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

    ${device.less1300} {
        max-width: 90%;
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 90px;
    position: sticky;
    top: 50%;
    left: 100%;
    z-index: 4;
    margin-left: -90px;

    ${device.less1300} {
        align-items: flex-start;
        position: relative;
        left: auto;
        margin-left: 0;
    }
`;

export const Share = styled.div`
    ${font(16)};

    ${device.less768} {
        ${font(14)}
    }
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1 / -1;
    height: 500px;
    grid-gap: 20px;

    ${device.less1300} {
        height: 400px;
    }

    ${device.less768} {
        height: auto;
        row-gap: 30px;
        grid-template-columns: repeat(auto-fill, 100%);
    }
`;
