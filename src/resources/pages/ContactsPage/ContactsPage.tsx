'use client';

import { memo } from 'react';

import { LayoutContainer, Text } from 'resources/components';
import { breadcrumbs } from 'resources/data/mocks';
import { Breadcrumbs } from 'resources/sections';

import {
    Root,
    TextContainer,
    Wrapper,
    MapWrapper,
    Info,
    Contacts,
    Container,
    TextBold,
    TextMedium,
} from './ContactsPage-styles';

export const ContactsPage = memo(() => {
    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.contacts} />

            <LayoutContainer>
                <Wrapper>
                    <Container>
                        <Text mode="h2">Контакты</Text>

                        <TextContainer>
                            <TextBold>Адрес</TextBold>

                            <TextMedium>г. Москва, ул. 2я Черногрязская, д.6, к.3</TextMedium>

                            <Info>Внешняя сторона ЖК РедСайд</Info>
                        </TextContainer>

                        <TextContainer>
                            <TextBold>Часы работы</TextBold>

                            <TextMedium>Пн — Вс с 10:00 до 22:00</TextMedium>

                            <Info>По предварительной записи</Info>
                        </TextContainer>

                        <Contacts>
                            <TextContainer>
                                <TextBold>Телефон</TextBold>

                                <TextMedium>+7 (495) 126-17-74</TextMedium>
                            </TextContainer>

                            <TextContainer>
                                <TextBold>Email</TextBold>

                                <TextMedium>info@radiusclinic.ru</TextMedium>
                            </TextContainer>
                        </Contacts>
                    </Container>

                    <MapWrapper src="https://yandex.ru/map-widget/v1/?um=constructor%3A899ce49bc2728fee50744bc8e6113511f61083d33ea4aa596e262dc8b5c1b19f&amp;source=constructor"></MapWrapper>
                </Wrapper>
            </LayoutContainer>
        </Root>
    );
});

ContactsPage.displayName = 'ContactsPage';
