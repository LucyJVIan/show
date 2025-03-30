import { memo } from 'react';
import { Controller } from 'react-hook-form';

import { ModalContent, Input, Button, Checkbox } from 'resources/components';
import { modalNameSubscribe, ModalSuccessForm } from 'resources/sections';
import { phoneMask } from 'resources/utils';

import { useModalSubscribe } from './ModalSubscribe-hooks';
import { Form, Action, DescriptionModal } from './ModalSubscribe-styles';

export const ModalSubscribe = memo(() => {
    const { handleSubmit, handleClose, form, isDisabled, isOpen } = useModalSubscribe();

    return (
        <>
            <ModalContent
                title="Записаться на прием"
                description="Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время"
                isVisible={isOpen(modalNameSubscribe)}
                onClose={() => handleClose(modalNameSubscribe)}
                descriptionContainer={DescriptionModal}
            >
                <Form>
                    <Controller
                        control={form.control}
                        name="name"
                        render={({ field: { onChange, onBlur, value }, fieldState }) => (
                            <Input
                                placeholder="Ваше имя*"
                                errorMessage={fieldState.error?.message}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="phone"
                        render={({ field: { onChange, onBlur, value }, fieldState }) => (
                            <Input
                                placeholder="Номер телефона*"
                                onChange={(event) => {
                                    const phone = phoneMask(event.target.value);
                                    onChange(phone);
                                }}
                                onBlur={onBlur}
                                errorMessage={fieldState.error?.message}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="email"
                        render={({ field: { onChange, onBlur, value }, fieldState }) => (
                            <Input
                                type="email"
                                placeholder="Электронная почта*"
                                onChange={onChange}
                                errorMessage={fieldState.error?.message}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="isAgree"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Checkbox checked={value} onCheckedChange={onChange} onBlur={onBlur}>
                                Согласен с условиями политики конфиденциальности
                            </Checkbox>
                        )}
                    />

                    <Action asChild>
                        <Button type="submit" disabled={isDisabled} onClick={handleSubmit}>
                            Отправить заявку
                        </Button>
                    </Action>
                </Form>
            </ModalContent>

            <ModalSuccessForm title="Спасибо за заявку" description="Администратор свяжется с вами в ближайшее время" />
        </>
    );
});

ModalSubscribe.displayName = 'ModalSubscribe';
