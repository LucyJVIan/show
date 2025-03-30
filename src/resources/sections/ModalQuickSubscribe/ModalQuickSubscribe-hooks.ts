import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';

import { useCreateUnisenderContact } from 'resources/data/queries';
import { BookingQuickData, bookingQuickSchema, fieldNameBookingQuickIsAgree } from 'resources/data/schemas';
import { useModal } from 'resources/hooks';

import { modalNameQuickSubscribe } from './ModalQuickSubscribe-constants';

export const useModalQuickSubscribe = () => {
    const modal = useModal();

    const form = useForm<BookingQuickData>({
        resolver: zodResolver(bookingQuickSchema),
    });

    const fieldIsAgree = useWatch({ control: form.control, name: fieldNameBookingQuickIsAgree });

    const { mutate: addContact } = useCreateUnisenderContact({
        onSuccess: () => {
            modal.handleClose(modalNameQuickSubscribe);
            form.reset();
        },
    });

    const handleSubmit = form.handleSubmit((data) => addContact({ type: modalNameQuickSubscribe, ...data }));

    return {
        form,
        handleSubmit,
        isDisabled: !fieldIsAgree,
        ...modal,
    };
};
