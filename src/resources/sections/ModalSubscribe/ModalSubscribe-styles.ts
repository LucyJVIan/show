import styled from 'styled-components';

import { ModalTrigger } from 'resources/components';
import { ModalDescription } from 'resources/components/Modal/Modal-styles';
import { device } from 'resources/constants';

export const Form = styled.form`
    display: grid;
    margin-top: 25px;
    gap: 20px;
`;

export const Action = styled(ModalTrigger)`
    margin-top: 10px;
    width: 230px;
    ${device.less1300} {
        width: 200px;
    }
    ${device.less768} {
        width: 100%;
    }
`;

export const DescriptionModal = styled(ModalDescription)`
    width: 70%;

    ${device.less768} {
        width: 100%;
    }
`;
