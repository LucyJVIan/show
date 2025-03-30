import styled from 'styled-components';

import { ModalDescription } from 'resources/components/Modal/Modal-styles';
import { device } from 'resources/constants';

export const DescriptionModal = styled(ModalDescription)`
    width: 72%;

    ${device.less860} {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: grid;
    gap: 20px;
    margin-top: 25px;
`;

export const Action = styled.div`
    margin-top: 10px;
    width: 230px;
    ${device.less1300} {
        width: 200px;
    }
    ${device.less768} {
        width: 100%;
    }
`;
