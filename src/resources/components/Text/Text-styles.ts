import styled, { CSSProperties } from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const BaseText = styled.div`
    ${font(14, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const HeadingOne = styled.h1`
    ${font(48, 600, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const HeadingTwo = styled.h2`
    ${font(40, 500, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        font-size: 30px;
    }

    ${device.less768} {
        font-size: 24px;
    }
`;

export const HeadingThree = styled.h3`
    ${font(32, 500, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        font-size: 24px;
    }

    ${device.less768} {
        font-size: 20px;
    }
`;

export const HeadingFour = styled.h4`
    ${font(20, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        font-size: 18px;
    }

    ${device.less768} {
        font-size: 16px;
    }
`;
export const HeadingFive = styled.h5`
    ${font(16, 400, 1.36)}
`;

export const Paragraph = styled.p<{ align: CSSProperties['textAlign'] }>`
    ${font(16, 400, 1.36)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    text-align: ${({ align }) => align || 'left'};

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const MarkedList = styled.ul`
    list-style: circle;
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const NumberedList = styled.ol`
    list-style: decimal;
    display: flex;
    flex-direction: column;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    gap: 10px;
    margin-top: 20px;
    ${font(14, 400, 1.1)}
`;

export const List = styled.li`
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    ${font(16, 400, 1.1)}

    ${device.less1300} {
        font-size: 14px;
    }
`;

export const Span = styled.span`
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.greenPrimary};
`;

export const Div = styled.div`
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(14, 400, 1.1)};
`;

export const Italic = styled.p<{ $center?: boolean }>`
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    text-align: ${({ $center }) => ($center ? 'center' : 'left')};
    font-style: italic;
`;

export const Strong = styled.p<{ $center?: boolean }>`
    ${font(16, 600, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    text-align: ${({ $center }) => ($center ? 'center' : 'left')};
`;
