import styled from 'styled-components';

import { colors, device } from 'resources/constants';

export const VideoWrapper = styled.div<{ $isPlaying?: boolean }>`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 350px;
    border-radius: 20px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${colors.blackPrimary};
        border-radius: 20px;
        opacity: ${({ $isPlaying }) => ($isPlaying ? '0' : '0.3')};
    }

    ${device.less768} {
        height: 240px;
    }
`;

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    pointer-events: all;
    cursor: pointer;
`;

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    border: none;
    color: white;
    z-index: 3;
    pointer-events: none;
`;
