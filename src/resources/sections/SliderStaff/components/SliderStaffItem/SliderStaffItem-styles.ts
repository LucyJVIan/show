import styled from 'styled-components';

import { Text } from 'resources/components';
import { device, colors } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex: 0 0 100%;
    border: 1px solid ${colors.greenLight};
    background-color: ${colors.white};
    border-radius: 20px;
`;

export const SlideImage = styled.img`
    width: 420px;
    border-radius: 20px;
    margin-right: 16px;
    grid-row: span 1;
    grid-column: span 1;

    ${device.less1300} {
        display: none;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-row: span 1;
    grid-column: span 1;
    gap: 42px;
    padding: 40px 40px 40px 0;

    ${device.less1300} {
        padding-left: 0;
        padding-top: 0;
    }

    ${device.less768} {
        padding: 0;
        gap: 30px;
    }
`;

export const SlideImageContainer = styled.div`
    display: none;
    position: relative;
    width: 100%;
    aspect-ratio: 420 / 566;
    overflow: hidden;
    border-radius: 20px;
    ${device.less1300} {
        display: block;
        aspect-ratio: 400 / 350;
    }

    ${device.less768} {
        aspect-ratio: 330 / 280;
    }
`;

export const SlideImageMobileAndTableTop = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    min-width: 100%;
    min-height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
`;

export const PersonBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;

    ${device.less1300} {
        flex-wrap: wrap;
        align-items: center;
        display: inline-flex;
        gap: 30px;
        margin-left: 30px;
        margin-top: 70px;
    }

    ${device.less768} {
        margin: 0 15px;
    }
`;

export const Person = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 35px;
    grid-row: span 1;
    grid-column: span 3;

    ${device.less1300} {
        align-items: center;
    }

    ${device.less768} {
        flex-wrap: wrap;
    }
`;

export const PersonName = styled(Text)`
    ${font(32, 500, 1)}

    ${device.less1300} {
        ${font(24, 500, 1)}
    }

    ${device.less768} {
        ${font(20, 500, 1)}
    }
`;

export const Description = styled(Text)`
    ${font(16, 400, 1.36)}
    margin-top: 25px;

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }

    ${device.less768} {
        margin-top: 30px;
    }
`;

export const Cards = styled.div`
    grid-row: span 1;
    grid-column: span 3;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    row-gap: 30px;
    margin: 0 20px;

    ${device.less1300} {
        margin: 0 30px;
        gap: 50px;
        row-gap: 55px;
    }
    ${device.less768} {
        margin: 0 15px;
        gap: 25px;
    }
`;

export const PersonInfo = styled.div`
    width: 50%;

    ${device.less1300} {
        width: 100%;
    }
`;

export const ButtonMore = styled.a`
    width: 230px;

    ${device.less1300} {
        display: inline-block;
        width: 200px;
    }

    ${device.less768} {
        display: none;
    }
`;

export const ButtonMoreMobile = styled.a`
    display: none;

    ${device.less768} {
        width: 100%;
        margin-bottom: 30px;
        display: block;
        grid-row: span 3;
    }
`;

export const ActionsMobile = styled.div`
    display: none;

    ${device.less768} {
        display: flex;
    }
`;
