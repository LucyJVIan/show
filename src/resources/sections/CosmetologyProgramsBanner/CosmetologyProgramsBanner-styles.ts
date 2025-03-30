import styled from 'styled-components';

import { Text } from 'resources/components';
import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    gap: 40px;
    ${device.less768} {
        gap: 30px;
    }
`;

export const BannerContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${colors.greenLight};

    ${device.less768} {
        border: none;
    }
`;

export const Banner = styled.div`
    display: flex;
    height: 400px;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    &:nth-child(even) {
        flex-direction: row-reverse;
        border-bottom-right-radius: 20px 20px;
        ${device.less768} {
            border-radius: 20px;
        }
    }

    ${device.less1300} {
        height: 300px;
    }

    ${device.less768} {
        height: auto;
        margin-bottom: 20px;
        border: 1px solid ${colors.greenLight};
        border-radius: 0 0 20px 20px;
        flex-direction: column-reverse !important;
    }
`;

export const BannerBody = styled.div`
    width: 50%;
    padding-left: 40px;
    ${device.less768} {
        padding-left: 0;
        padding: 40px 20px;

        width: 100%;
    }
`;

export const BannerPoster = styled.div`
    width: 50%;
    height: 100%;

    ${device.less768} {
        padding-left: 0;
        width: 100%;
    }
`;

export const BannerPosterImage = styled.img`
    width: 100%;
    transform: translateY(-1px);
`;

export const BannerAction = styled.div`
    width: 230px;
    ${device.less1300} {
        width: 200px;
    }
    ${device.less768} {
        width: 100%;
    }
`;

export const BannerTitle = styled(Text)`
    margin-top: 20px;
    margin-bottom: 60px;
    ${font(32, 500, 1.1)}

    ${device.less1300} {
        ${font(24, 500, 1.1)}
    }

    ${device.less768} {
        ${font(20, 500, 1.1)}
    }
`;

export const BannerSubtitle = styled(Text)``;

export const Title = styled(Text)`
    width: 50%;
    ${font(40, 500, 1.1)}

    ${device.less1300} {
        width: 60%;
        ${font(30, 500, 1.1)}
    }
    ${device.less768} {
        width: 100%;
        ${font(24, 500, 1.1)}
    }
`;
