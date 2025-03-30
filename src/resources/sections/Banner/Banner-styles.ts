import styled from 'styled-components';

import { LayoutContainer, Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div<{ $posterUrl: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background: url(${(props) => props.$posterUrl}) no-repeat right center;
    background-size: contain;

    ${device.less1300} {
        margin-bottom: 30px;
    }

    ${device.less768} {
        background: none;
    }
`;
export const Body = styled(LayoutContainer)``;

export const Content = styled.div`
    width: 50%;
    display: grid;
    gap: 30px;

    ${device.less1300} {
        margin-top: 0;
        width: 60%;
    }

    ${device.less860} {
        width: 80%;
    }

    ${device.less768} {
        width: 100%;
        gap: 20px;
    }
`;

export const Actions = styled.div`
    width: 230px;
    margin-top: 20px;

    ${device.less1300} {
        width: 200px;
        margin-top: 10px;
    }

    ${device.less768} {
        width: 100%;
    }
`;

export const Description = styled(Text)`
    ${font(20, 400, 1.36)}
    width: 70%;
    ${device.less1300} {
        width: 100%;
        ${font(16, 400, 1.36)}
    }

    ${device.less768} {
        ${font(14, 400, 1.36)}
    }
`;

export const Title = styled(Text)<{ $isTraining?: boolean }>`
    ${(props) => (props.$isTraining ? font(40, 500, 1.1) : font(48, 500, 1.1))}

    ${device.less1300} {
        ${font(30, 500, 1.1)}
    }

    ${device.less768} {
        ${font(24, 500, 1.1)}
    }
`;

export const BreadcrumbsContainer = styled.div`
    margin-block: 15px;
`;
