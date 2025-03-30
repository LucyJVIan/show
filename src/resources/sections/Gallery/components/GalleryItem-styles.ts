import styled from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    display: grid;
    height: 537px;

    ${device.less1300} {
        height: auto;
        max-height: 428px;
        width: auto;
    }

    ${device.less768} {
        max-height: 560px;
    }
`;

export const MiniGalleryWrapper = styled.div`
    display: grid;
    height: 530px;

    ${device.less1300} {
        height: 360px;
        margin: 0 auto;
    }

    ${device.less768} {
        height: auto;
        width: 100%;
    }
`;

export const Title = styled(Text)`
    margin-top: 25px;
    margin-bottom: 15px;

    ${font(20, 500, 1)}

    ${device.less1300} {
        ${font(18, 500, 1)}
    }

    ${device.less860} {
        ${font(16, 500, 1)}
    }
`;
