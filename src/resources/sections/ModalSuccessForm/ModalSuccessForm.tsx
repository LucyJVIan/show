import { memo } from 'react';

import { ModalContent } from 'resources/components';
import { colors } from 'resources/constants';
import { useModal } from 'resources/hooks';

import { modalNameSuccessForm } from './ModalSuccessForm-constants';
import { Root, Title, Description } from './ModalSuccessForm-styles';
import { ModalSuccessFormProps } from './ModalSuccessForm-types';

export const ModalSuccessForm = memo<ModalSuccessFormProps>((props) => {
    const { title, description } = props;

    const { isOpen, handleCloseAllModal } = useModal();

    return (
        <ModalContent
            isHeadless
            title={title}
            description={description}
            isVisible={isOpen(modalNameSuccessForm)}
            onClose={handleCloseAllModal}
            background={colors.greenPrimary}
            colorIconClose={colors.white}
        >
            <Root>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Root>
        </ModalContent>
    );
});

ModalSuccessForm.displayName = 'ModalSuccessForm';
