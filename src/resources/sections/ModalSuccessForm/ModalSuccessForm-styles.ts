import { styled } from 'styled-components';

import { ModalTitle, ModalDescription } from 'resources/components/Modal/Modal-styles';
import { colors } from 'resources/constants';
import { device } from 'resources/constants';

export const Root = styled.div`
    padding-block: 30px;
    text-align: center;

    ${device.less1300} {
        padding-block: 72px;
    }

    ${device.less768} {
        padding-block: 45px;
    }
`;

export const Title = styled(ModalTitle)`
    color: ${colors.white};
    margin-bottom: 30px;

    ${device.less768} {
        margin-bottom: 20px;
    }
`;

export const Description = styled(ModalDescription)`
    color: ${colors.white};
`;
