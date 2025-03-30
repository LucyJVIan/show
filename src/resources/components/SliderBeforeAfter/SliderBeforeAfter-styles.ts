import { ImgComparisonSlider } from '@img-comparison-slider/react';
import styled from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';

import { IconTwoArrow } from '../Icons';

export const Root = styled(ImgComparisonSlider)`
    width: 100%;
    position: relative;
    border-radius: 20px;
    --divider-width: 4px;

    ${device.less1300} {
        max-height: 440px;
    }

    ${device.less768} {
        aspect-ratio: 1;
        width: auto;
        margin: 0 auto;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    border-radius: 20px;

    ${device.less1300} {
        aspect-ratio: 1;
    }
`;

export const Figure = styled.figure<{ $miniGallery?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    background: #fff;
    position: relative;

    ${device.less1300} {
        aspect-ratio: 1;
    }

    &.before::before,
    &.after::after {
        content: '';
        position: absolute;
        top: ${(props) => (props.$miniGallery ? '388px' : '396px')};
        left: 0;
        width: 100%;
        height: 40px;
        background: ${colors.whiteWithOpacity};
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        color: ${colors.white};
        font-weight: 500;
        font-size: 18px;
        font-family: ${fontAvenirNextCyr.style.fontFamily};

        ${device.less1300} {
            top: auto;
            bottom: ${(props) => (props.$miniGallery ? '10px' : '0')};
        }

        ${device.less980} {
            bottom: 0;
        }
    }

    &.before::before {
        content: attr(data-before);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 25px;

        ${device.less1300} {
            padding-left: 15px;
        }
    }

    &.after::after {
        content: attr(data-after);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 25px;

        ${device.less1300} {
            padding-right: 24px;
        }

        ${device.less768} {
            padding-right: 15px;
        }
    }
`;

export const IconArrow = styled(IconTwoArrow)`
    width: 40px;
    height: 40px;

    ${device.less860} {
        width: 20px;
        height: 20px;
    }
`;
