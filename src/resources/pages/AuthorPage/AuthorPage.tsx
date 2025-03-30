'use client';

import { memo } from 'react';

import { Appointment, LayoutContainer, ModalRoot } from 'resources/components';
import { breadcrumbs } from 'resources/data/mocks';
import {
    Breadcrumbs,
    InteractiveYears,
    ModalSubscribe,
    ModalSuccessForm,
    ModalSubscribeTraining,
} from 'resources/sections';

import { Header, Image, Root, TextContainer, Wrapper, Text, ImageWrapper, Blocks } from './AuthorPage-styles';

export const AuthorPage = memo(() => {
    return (
        <ModalRoot>
            <Root>
                <Breadcrumbs items={breadcrumbs.author} />

                <LayoutContainer>
                    <ModalSubscribeTraining />

                    <ModalSubscribe />

                    <ModalSuccessForm
                        title="Спасибо за заявку"
                        description="Администратор свяжется с вами в ближайшее время"
                    />

                    <Wrapper>
                        <TextContainer>
                            <Header>О Ларисе Радецкой</Header>

                            <Text>
                                Медицинский директор клиники «Радиус», к.м.н. врач-дерматолог косметолог, физиотерапевт,
                                реабилитолог. Научный эксперт в лазерной косметологии и других направлениях эстетической
                                медицины. <br />
                                <br />
                                Основатель и руководитель Центра повышения квалификации лазерной косметологии Ларисы
                                Радецкой, в котором она регулярно проводит авторские семинары по основам лазерной
                                физики. «Поставить руку» у Ларисы Иосифовны означает стать профессионалом в отрасли.{' '}
                                <br />
                                <br />
                                Признанный всеми международными конгрессами опытнейший практик, воспитавший на своих
                                обучениях плеяду косметологов, известных в России. <br />
                                <br />
                                Ведущий специалист всей мировой реконструктивной косметологии, автор методики коррекции
                                рубцов. Преподаватель авторского метода в своем Центре повышения квалификации лазерной
                                косметологии.
                            </Text>
                        </TextContainer>

                        <ImageWrapper>
                            <Image src="/assets/images/larisa.jpg" alt="larisa"></Image>
                        </ImageWrapper>
                    </Wrapper>

                    <InteractiveYears />

                    <Blocks>
                        <Appointment
                            title="Записаться на приём"
                            text="Если вы хотите договориться о записи к Ларисе Радецкой на приём, нажмите на кнопку и оставьте заявку"
                            image="/assets/images/appointments/procedure.jpg"
                            isAppointment
                        />

                        <Appointment
                            title="Записаться на обучение"
                            text="Если вы хотите пройти обучение у Ларисы Радецкой, ознакомьтесь с учебными программами или оставьте заявку для получения консультации"
                            image="/assets/images/appointments/education.jpg"
                            isEducation
                        />
                    </Blocks>
                </LayoutContainer>
            </Root>
        </ModalRoot>
    );
});

AuthorPage.displayName = 'AuthorPage';
