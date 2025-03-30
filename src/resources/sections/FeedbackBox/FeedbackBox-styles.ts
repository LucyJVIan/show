import styled from 'styled-components';

import { Link } from 'resources/components';
import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    position: relative;
    width: 100%;

    ${device.less768} {
        padding: 0;
    }
`;

export const LinkAllExamples = styled(Link)`
    width: 230px;

    ${device.less1300} {
        width: 200px;
    }
    ${device.less768} {
        display: none;
    }
`;

export const LinkAllExamplesMobile = styled(Link)`
    width: 100%;
    display: none;

    ${device.less768} {
        display: block;
        margin-top: 30px;
        padding: 0 15px;
    }
`;

export const Body = styled.div<{ $isMiniFeedback?: boolean }>`
    max-width: 1420px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    position: relative;
    width: ${(props) => (props.$isMiniFeedback ? '980px' : 'auto')};
    margin: 0 auto 0 ${(props) => (props.$isMiniFeedback ? '-60px' : '')};

    ${device.less1300} {
        max-width: 980px;
    }

    ${device.less980} {
        width: ${(props) => (props.$isMiniFeedback ? '100%' : 'auto')};
        margin-left: ${(props) => (props.$isMiniFeedback ? '0' : '')};
    }

    ${device.less860} {
        gap: 10px;
    }

    ${device.less768} {
        padding: ${({ $isMiniFeedback }) => ($isMiniFeedback ? '0' : ' 0 15px')};
    }
`;

export const Header = styled.div<{ $isMiniFeedback?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: ${(props) => (props.$isMiniFeedback ? '860px' : ' 1300px')};
    margin: ${(props) => (props.$isMiniFeedback ? '0 0 30px' : ' 0 auto 30px')};

    ${device.less1300} {
        max-width: 860px;
    }

    ${device.less860} {
        padding: ${(props) => (props.$isMiniFeedback ? '0' : ' 0 15px')};
    }
`;

export const Title = styled.p<{ $isMiniFeedback?: boolean }>`
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${(props) => (props.$isMiniFeedback ? font(32, 500, 1) : font(40, 500, 1))};

    ${device.less1300} {
        ${font(30, 500, 1.1)}
    }

    ${device.less768} {
        ${font(24, 500, 1.1)}
        max-width: 80%;
    }
`;

export const LeftButtonMobile = styled.div`
    display: none;

    ${device.less768} {
        position: absolute;
        display: block;
        left: auto;
        right: 55px;
        top: 0;
        z-index: 10;
    }
`;

export const RightButtonMobile = styled.div`
    display: none;

    ${device.less768} {
        position: absolute;
        display: block;
        right: 15px;
        top: 0;
        z-index: 10;
    }
`;

export const FeedbackButton = styled.div<{ $isMiniGallery?: boolean }>`
    position: relative;
    transform: translateY(-50%);

    ${device.less768} {
        display: none;
    }
`;
