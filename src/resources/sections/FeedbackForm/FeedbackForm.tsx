'use client';

import { memo } from 'react';
import { Controller } from 'react-hook-form';

import { Button, Checkbox, Input, TextArea } from 'resources/components';
import { fieldNameFeedbackIsAgree, fieldNameFeedbackMessage, fieldNameFeedbackName } from 'resources/data/schemas';
import { useFeedbackForm } from 'resources/sections/FeedbackForm/FeedbackForm-hooks';

import { ButtonWrapper, Header, Root, Wrapper } from './FeedbackForm-styles';

export const FeedbackForm = memo(() => {
    const { form, handleSubmit } = useFeedbackForm();

    const isAgree = form.watch(fieldNameFeedbackIsAgree);

    return (
        <form onSubmit={handleSubmit}>
            <Root>
                <Header>Оставить отзыв</Header>

                <Wrapper>
                    <Controller
                        control={form.control}
                        name={fieldNameFeedbackName}
                        render={({ field, fieldState }) => (
                            <Input {...field} errorMessage={fieldState.error?.message} placeholder="Ваше имя" />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name={fieldNameFeedbackMessage}
                        render={({ field, fieldState }) => (
                            <TextArea
                                {...field}
                                errorMessage={fieldState.error?.message}
                                placeholder="Напишите отзыв"
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name={fieldNameFeedbackIsAgree}
                        render={({ field: { name, onChange, onBlur, value } }) => (
                            <Checkbox name={name} checked={value} onCheckedChange={onChange} onBlur={onBlur}>
                                Согласен с условиями политики конфиденциальности
                            </Checkbox>
                        )}
                    />
                </Wrapper>

                <ButtonWrapper>
                    <Button type="submit" disabled={!isAgree}>
                        Отправить
                    </Button>
                </ButtonWrapper>
            </Root>
        </form>
    );
});

FeedbackForm.displayName = 'FeedbackForm';
