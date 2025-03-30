'use client';

import { ArrowButton, ArrowButtonWithText, Button, Input, Checkbox } from 'resources/components';

import { ButtonBody, Content, ContentLabel, ContentRow } from './UiKitPage-styles';

export const UiKitPage = () => {
    return (
        <Content>
            <ContentLabel>Акцентные кнопки</ContentLabel>

            <ContentRow>
                <Button>Подробнее об авторе</Button>
                <Button>Вариант с очень длинным текстом</Button>
                <Button disabled>Disabled</Button>
            </ContentRow>

            <ContentLabel>Вторичные кнопки</ContentLabel>

            <ContentRow>
                <Button mode="secondary">С обводкой</Button>
                <Button mode="secondary">Вариант с очень длинным текстом</Button>
                <Button mode="secondary" disabled>
                    Disabled
                </Button>
            </ContentRow>

            <ButtonBody>
                <Button mode="secondary" disabled>
                    Кнопка в 250px
                </Button>
            </ButtonBody>

            <ContentLabel>Стрелочки</ContentLabel>

            <ContentRow justifyContent="flex-start">
                <ArrowButton mode="left" />
                <ArrowButton mode="right" />
                <ArrowButton mode="left" disabled />
                <ArrowButton mode="right" disabled />
            </ContentRow>

            <ContentLabel>Текстовое поле</ContentLabel>

            <ContentRow display="grid" flexDirection="column">
                <Input type="text" placeholder="Введите текст" />
                <Input placeholder="Введите текст" errorMessage="Поле обязательно для заполнения" />
            </ContentRow>

            <ContentLabel>Кнопки со стрелками</ContentLabel>

            <ContentRow alignItems="flex-start" flexDirection="column">
                <ArrowButtonWithText>Смотреть все</ArrowButtonWithText>
                <ArrowButtonWithText>Смотреть все</ArrowButtonWithText>
                <ArrowButtonWithText disabled>Пример стрелки</ArrowButtonWithText>
            </ContentRow>

            <ContentLabel>Чекбокс</ContentLabel>

            <ContentRow alignItems="flex-start" flexDirection="column">
                <Checkbox />

                <Checkbox>Согласен с условиями политики конфиденциальности</Checkbox>
            </ContentRow>
        </Content>
    );
};

UiKitPage.displayName = 'UiKitPage';
