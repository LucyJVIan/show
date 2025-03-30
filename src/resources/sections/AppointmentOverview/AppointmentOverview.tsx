import { memo, useCallback } from 'react';

import { Button, LayoutContainer, ModalTrigger, ModalRoot } from 'resources/components';
import { useModal } from 'resources/hooks';

import { Root, Title, Description, Actions, StepsContainer, Info } from './AppointmentOverview-styles';
import { modalNameSubscribe, ModalSubscribe } from '../ModalSubscribe';
import { AppointmentOverviewStepItem } from './components/AppointmentOverviewStepItem';

export const AppointmentOverview = memo(() => {
    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen(modalNameSubscribe);
    }, [handleOpen]);

    return (
        <ModalRoot>
            <LayoutContainer>
                <ModalSubscribe />

                <Root>
                    <Info>
                        <Title>
                            Запишитесь на прием
                            <br />к Ларисе Радецкой
                        </Title>
                        <Description>
                            Кратко описываем положительные качества клиники, рассказываем об удобстве и доступном
                            расположении, перечисляем, какую выгоду можно получить от посещения клиники
                        </Description>
                    </Info>

                    <Actions>
                        <ModalTrigger onClick={handleOpenClick} asChild>
                            <Button>Записаться на прием</Button>
                        </ModalTrigger>
                    </Actions>

                    <StepsContainer>
                        <AppointmentOverviewStepItem step={1} title="Нажмите на кнопку" />
                        <AppointmentOverviewStepItem step={2} title="Оставьте заявку" />
                        <AppointmentOverviewStepItem step={3} title="Согласуйте дату и время с ассистентом" />
                        <AppointmentOverviewStepItem step={4} title="Приходите на прием" />
                    </StepsContainer>
                </Root>
            </LayoutContainer>
        </ModalRoot>
    );
});

AppointmentOverview.displayName = 'AppointmentOverview';
