import styled from 'styled-components';
import { Swiper as OriginalSwiper, SwiperProps } from 'swiper/react';

import { Link, Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Container = styled.div`
    width: 100%;
    margin: 80px 0;
`;

export const Root = styled.div`
    position: relative;
    width: 100%;
`;

export const MiniGallery = styled.div`
    position: relative;
    width: 860px;

    ${device.less1300} {
        width: 100%;
        margin: 0 auto;
    }

    ${device.less768} {
        width: 100%;
    }
`;

export const Title = styled(Text)<{ $isMiniGallery?: boolean }>`
    ${(props) => (props.$isMiniGallery ? font(32, 500, 1) : font(40, 500, 1))};

    ${device.less1300} {
        ${font(30, 500, 1)}
    }

    ${device.less860} {
        ${font(24, 500, 1)}
    }
`;

export const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    ${device.less860} {
        gap: 10px;
    }
`;

export const GalleryContainer = styled.div<{ $isMiniGallery?: boolean }>`
    max-width: 1420px;
    margin: 0 auto;
    width: 100%;

    ${device.less1300} {
        max-width: 980px;
        padding: ${(props) => (props.$isMiniGallery ? '0' : '0 15px')};
    }

    ${device.less860} {
        padding: 0;
    }
`;

export const LinkAllExamples = styled(Link)`
    width: 230px;

    ${device.less1300} {
        width: 200px;
    }

    ${device.less860} {
        display: none;
    }
`;

export const LinkAllExamplesMobile = styled(Link)`
    width: 100%;
    display: none;

    ${device.less860} {
        display: block;
        margin-top: 30px;
    }
`;

export const Swiper = styled(OriginalSwiper)<SwiperProps>`
    ${device.less860} {
        margin: auto;
        width: 80%;
    }
`;

export const Body = styled.div<{ $isMiniGallery?: boolean }>`
    width: ${(props) => (props.$isMiniGallery ? '980px' : '100%')};
    margin-left: ${(props) => (props.$isMiniGallery ? '-60px' : '0')};

    ${device.less980} {
        margin-left: 0;
        width: 100%;
    }

    ${device.less860} {
        margin: auto;
        padding: ${(props) => (props.$isMiniGallery ? '0' : '0 15px')};
    }

    .swiper-button-next,
    .swiper-button-prev {
        right: 0;
        left: 0;
    }

    .swiper-button-prev:after {
        display: none;
    }

    .swiper-button-next:after {
        display: none;
    }
`;

export const GalleryButton = styled.div<{ $isMiniGallery?: boolean }>`
    position: relative;
    top: -40px;

    ${device.less1300} {
        top: ${(props) => (props.$isMiniGallery ? '-48px' : '-40px')};
    }

    ${device.less860} {
        top: ${(props) => (props.$isMiniGallery ? '-64px' : '-44px')};
    }

    ${device.less768} {
        top: ${(props) => (props.$isMiniGallery ? '-50px' : '-30px')};
    }
`;

export const Header = styled.div<{ $isMiniGallery?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto 30px;

    ${device.less1300} {
        max-width: 860px;
    }

    ${device.less860} {
        width: 100%;
        padding: ${(props) => (props.$isMiniGallery ? '0' : ' 0 15px')};
    }
`;
