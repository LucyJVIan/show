import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';

import { useCreateUnisenderContact } from 'resources/data/queries';
import { BookingData, bookingSchema, fieldNameBookingIsAgree } from 'resources/data/schemas';
import { useModal } from 'resources/hooks';

import { modalNameSubscribe } from './ModalSubscribe-constants';
import { modalNameSuccessForm } from '../ModalSuccessForm';

export const useModalSubscribe = () => {
    const modal = useModal();

    const form = useForm<BookingData>({
        resolver: zodResolver(bookingSchema),
    });

    const fieldIsAgree = useWatch({ control: form.control, name: fieldNameBookingIsAgree });

    const { mutate: addContact } = useCreateUnisenderContact({
        onSuccess: () => {
            form.reset();
            modal.handleOpen(modalNameSuccessForm);
        },
    });

    const handleSubmit = form.handleSubmit((data) => addContact({ type: modalNameSubscribe, ...data }));

    return {
        ...modal,
        form,
        isDisabled: !fieldIsAgree,
        handleSubmit,
    };
};
