import Link from 'next/link';
import { memo, useCallback } from 'react';

import { Button, ModalTrigger } from 'resources/components';
import { useModal } from 'resources/hooks';

import { Root, Header, Text, ButtonsWrapper, TextContainer, Container } from './Appointment-styles';
import { AppointmentProps } from './Appointment-types';

export const Appointment = memo<AppointmentProps>((props) => {
    const { title, text, image, isEducation, isAppointment } = props;

    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen('subscribe');
    }, [handleOpen]);

    const handleOpenBookingTraining = useCallback(() => {
        handleOpen('subscribeTraining');
    }, [handleOpen]);

    return (
        <Root $image={image}>
            <TextContainer>
                <Header>{title}</Header>

                <Text>{text}</Text>
            </TextContainer>

            <ButtonsWrapper>
                <Container>
                    {isAppointment ? (
                        <ModalTrigger onClick={handleOpenClick} asChild>
                            <Button>Записаться</Button>
                        </ModalTrigger>
                    ) : (
                        <ModalTrigger onClick={handleOpenBookingTraining} asChild>
                            <Button>Записаться</Button>
                        </ModalTrigger>
                    )}
                </Container>

                {isEducation ? (
                    <Container>
                        <Link href="#">
                            <Button mode="secondary white">Программы</Button>
                        </Link>
                    </Container>
                ) : null}
            </ButtonsWrapper>
        </Root>
    );
});

Appointment.displayName = 'Appointment';
