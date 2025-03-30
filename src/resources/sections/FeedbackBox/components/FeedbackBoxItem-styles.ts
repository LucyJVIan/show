import styled from 'styled-components';

import { Link, Text } from 'resources/components';
import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div<{ $expanded?: boolean }>`
    border: 1px solid ${colors.greenLight};
    height: ${({ $expanded }) => ($expanded ? 'auto' : '320px')};
    padding: 40px;
    border-radius: 20px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    background-color: ${colors.white};
    width: 100%;

    ${device.less1300} {
        height: ${({ $expanded }) => ($expanded ? 'auto' : '374px')};
        padding: 40px 20px;
    }

    ${device.less768} {
        height: auto;
        padding: 30px 20px;
        margin: 0 auto;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextFeedbackGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    max-height: 84%;
    position: relative;
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

export const ProcedureFeedback = styled.div`
    ${font(16, 400, 1.36)}
    color: ${colors.blackPrimary};
    opacity: 0.5;

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;

export const Title = styled.p`
    ${font(20, 500, 1)};
    color: ${colors.blackPrimary};

    ${device.less1300} {
        ${font(18, 500, 1.36)}
    }
`;

export const TextFeedbackContainer = styled.div<{ $expanded?: boolean }>`
    ${font(16, 400, 1.36)}
    color: ${colors.blackPrimary};
    min-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 'none' : 7)};
    -webkit-box-orient: vertical;
    ${({ $expanded }) => ($expanded ? 'white-space: normal;' : '')}

    ${device.less1300} {
        ${font(14, 400, 1.36)}
        -webkit-line-clamp: ${({ $expanded }) => ($expanded ? 'none' : 10)};
    }

    span {
        white-space: nowrap;
    }
`;

export const ReadMoreButton = styled.button`
    ${font(16, 700, 1.36)}
    background: white;
    border: none;
    display: block;
    position: absolute;
    z-index: 2;
    color: ${colors.blackPrimary};
    font-size: 14px;
    cursor: pointer;
    text-align: left;
    padding: 0;
    margin-bottom: 1px;
    bottom: 0;
    right: 0;
    font-family: ${fontAvenirNextCyr.style.fontFamily};

    ${device.less1300} {
        margin-bottom: 0;
        right: 3px;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const UnderItem = styled.div`
    display: flex;
    gap: 15px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    margin-top: 20px;
    width: 100%;
    justify-content: flex-start;
`;

export const WhatchOriginalFeedback = styled.p`
    ${font(16, 400, 1.36)};
    color: ${colors.blackPrimary};
    cursor: pointer;

    ${device.less1300} {
        ${font(14, 400, 1.36)};
    }
`;

export const TextFeedback = styled(Text)<{ isExpanded: boolean }>`
    ${font(16, 400, 1.36)}
    color: ${colors.blackPrimary};
`;

export const DateOfFeedback = styled.p`
    ${font(16, 400, 1.36)}
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    opacity: 0.5;

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;

export const Procedure = styled(Link)`
    ${font(16, 700, 1.36)}
    color: ${colors.greenPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    border-bottom: 1px solid ${colors.greenPrimary};

    ${device.less1300} {
        ${font(14, 700, 1.36)}
    }
`;
