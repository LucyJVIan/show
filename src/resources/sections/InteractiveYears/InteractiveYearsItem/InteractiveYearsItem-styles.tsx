import styled, { css } from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    gap: 15px;
    transition: all 0.5s ease;
    position: relative;
`;

export const IconWrapper = styled.div`
    color: ${colors.greenPrimary};
    width: 293px;
    height: 293px;
    border-radius: 50%;
    background: ${colors.whiteGhost};
    display: flex;
    justify-content: center;
    align-items: center;

    ${device.less768} {
        width: 205px;
        height: 205px;
    }

    svg {
        width: 150px;
        height: 150px;
        animation: rotate 1s linear infinite;
        opacity: 0.5;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const Image = styled.img`
    width: 293px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    transition: all 0.5s ease;

    ${device.less768} {
        width: 205px;
    }
`;

export const Year = styled.div<{ $isBigPicture?: boolean }>`
    color: ${colors.greenPrimary};
    transition: all 0.5s ease;

    ${(props) => {
        return props.$isBigPicture
            ? css`
                  ${font(48, 500)}

                  ${device.less768} {
                      ${font(36, 500)}
                  }
              `
            : css`
                  ${font(36, 500)}

                  ${device.less768} {
                      ${font(20, 500)}
                  }
              `;
    }}
`;

export const BigImage = styled.div`
    max-width: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;

    ${device.less768} {
        max-width: 250px;
    }
`;

export const WhiteRound = styled.div<{ $isBigPicture?: boolean; $isActive?: boolean }>`
    width: 44px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid ${colors.greenLight};
    background-color: ${colors.white};
    position: relative;
    z-index: 2;
    transition: 0.5s background-color ease-in-out;

    ${(props) =>
        props.$isActive
            ? css`
                  background-color: ${colors.greenLight};
              `
            : css`
                  background-color: ${colors.white};
              `}
    ${device.less768} {
        width: 30px;
    }
`;

export const NoImage = styled.div<{ $isDown?: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.$isDown ? 'column-reverse' : 'column')};
    align-items: center;
    gap: 15px;
    transform: ${(props) => (props.$isDown ? 'translateY(32px)' : 'translateY(-32px)')};
    cursor: pointer;
    transition: transform 0.5s ease;

    &:hover ${WhiteRound} {
        background-color: ${colors.greenLight};
    }

    ${device.less768} {
        transform: ${(props) => (props.$isDown ? 'translateY(23px)' : 'translateY(-20px)')};
    }
`;
