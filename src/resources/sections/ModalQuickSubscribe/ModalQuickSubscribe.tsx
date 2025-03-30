import { Controller } from 'react-hook-form';

import { Button, Input, ModalContent, Checkbox } from 'resources/components';
import { phoneMask } from 'resources/utils/mask';

import { modalNameQuickSubscribe } from './ModalQuickSubscribe-constants';
import { useModalQuickSubscribe } from './ModalQuickSubscribe-hooks';
import { Action, DescriptionModal, Form } from './ModalQuickSubscribe-styles';
import { ModalSuccessForm } from '../ModalSuccessForm';

export const ModalQuickSubscribe = () => {
    const { isOpen, handleClose, form, handleSubmit, isDisabled } = useModalQuickSubscribe();

    return (
        <>
            <ModalContent
                title="Быстрая запись"
                isVisible={isOpen(modalNameQuickSubscribe)}
                descriptionContainer={DescriptionModal}
                description="Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время"
                onClose={() => handleClose(modalNameQuickSubscribe)}
            >
                <Form onSubmit={handleSubmit}>
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field: { onChange, onBlur, value }, fieldState }) => (
                            <Input
                                name="phone"
                                placeholder="Номер телефона*"
                                value={value}
                                errorMessage={fieldState.error?.message}
                                onChange={(event) => {
                                    const phone = phoneMask(event.target.value);
                                    onChange(phone);
                                }}
                                onBlur={onBlur}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field: { onChange, onBlur, value }, fieldState }) => (
                            <Input
                                name="email"
                                placeholder="Email*"
                                value={value}
                                errorMessage={fieldState.error?.message}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    <Controller
                        name="isAgree"
                        control={form.control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Checkbox checked={value} onCheckedChange={onChange} onBlur={onBlur}>
                                Согласен с условиями политики конфиденциальности
                            </Checkbox>
                        )}
                    />
                    <Action>
                        <Button type="submit" disabled={isDisabled}>
                            Отправить заявку
                        </Button>
                    </Action>
                </Form>
            </ModalContent>
            <ModalSuccessForm title="Спасибо за заявку" description="Администратор свяжется с вами в ближайшее время" />
        </>
    );
};

ModalQuickSubscribe.displayName = 'ModalQuickBooking';
