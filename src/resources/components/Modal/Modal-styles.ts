import * as Dialog from '@radix-ui/react-dialog';
import { css, styled } from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

import { ModalProps } from './Modal-types';

export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 2000;
    inset: 0;
`;

export const DialogContent = styled(Dialog.Content)<{
    $height: ModalProps['height'];
    $background: ModalProps['background'];
}>`
    background-color: ${(props) => props.$background ?? colors.white};
    border-radius: 20px;
    position: fixed;
    z-index: 2001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -56%);
    width: 100%;
    max-width: 860px;
    max-height: 85vh;
    padding: 90px 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
        outline: none;
    }

    ${(props) =>
        props?.$height
            ? css`
                  height: ${props.$height};
              `
            : css`
                  min-height: 659px;

                  ${device.less1300} {
                      min-height: 500px;
                  }

                  ${device.less768} {
                      height: auto;
                      min-height: auto;
                  }
              `}

    ${device.less1300} {
        max-width: 590px;
        padding: 80px 40px;
    }

    ${device.less768} {
        width: 95%;
        padding: 60px 20px;
    }
`;

export const Body = styled.div<{
    $isPaddingInline?: boolean;
    $isScrollable?: boolean;
}>`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    width: 100%;

    ${(props) =>
        props?.$isPaddingInline
            ? css`
                  padding-inline: 50px;

                  ${device.less1300} {
                      padding-inline: 30px;
                  }
              `
            : css`
                  padding-inline: 0;
              `};

    ${(props) =>
        props.$isScrollable &&
        css`
            overflow-y: scroll;
        `}

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${colors.whiteGhost};
    }

    &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: ${colors.blackPrimary};
    }
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ModalInfo = styled.div`
    display: grid;
    gap: 25px;
    margin-bottom: 10px;
`;

export const ModalTitle = styled(Dialog.Title)`
    ${font(32, 500)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        ${font(24, 500)}
    }

    ${device.less768} {
        ${font(20, 500)}
    }
`;

export const ModalDescription = styled(Dialog.Description)`
    ${font(20, 400, 1.36)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        ${font(16, 400, 1.36)}
    }

    ${device.less768} {
        ${font(14, 400, 1.36)}
    }
`;

export const CloseButton = styled(Dialog.Close)<{ $colorIconClose: ModalProps['colorIconClose'] }>`
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;

    ${device.less1300} {
        right: 30px;
        top: 30px;
    }

    & svg path {
        stroke: ${(props) => props.$colorIconClose ?? colors.greenPrimary};
    }
`;
