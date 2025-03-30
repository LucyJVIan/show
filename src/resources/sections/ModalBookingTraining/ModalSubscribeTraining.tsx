import { memo } from 'react';
import { Controller } from 'react-hook-form';

import { ModalContent, Input, Button, Checkbox } from 'resources/components';
import { modalNameTraining, ModalSuccessForm } from 'resources/sections';
import { phoneMask } from 'resources/utils';

import { useModalSubscribeTraining } from './ModalSubscribeTraining-hooks';
import { Form, Action, DescriptionModal } from './ModalSubscribeTraining-styles';

export const ModalSubscribeTraining = memo(() => {
    const { handleSubmit, isAgree, handleClose, form, isOpen } = useModalSubscribeTraining();

    return (
        <>
            <ModalContent
                title="Записаться на обучение"
                description="Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время"
                isVisible={isOpen(modalNameTraining)}
                onClose={() => handleClose(modalNameTraining)}
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

                    <Action>
                        <Button type="submit" disabled={isAgree} onClick={handleSubmit}>
                            Отправить заявку
                        </Button>
                    </Action>
                </Form>
            </ModalContent>
            <ModalSuccessForm title="Спасибо за заявку" description="Администратор свяжется с вами в ближайшее время" />
        </>
    );
});

ModalSubscribeTraining.displayName = 'ModalSubscribeTraining';
