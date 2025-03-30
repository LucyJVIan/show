import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';

import { useCreateUnisenderContact } from 'resources/data/queries';
import { BookingTrainingData, bookingTrainingSchema, fieldNameBookingTrainingIsAgree } from 'resources/data/schemas';
import { useModal } from 'resources/hooks';
import { modalNameTraining, modalNameSuccessForm } from 'resources/sections';

export const useModalSubscribeTraining = () => {
    const modal = useModal();

    const form = useForm<BookingTrainingData>({
        resolver: zodResolver(bookingTrainingSchema),
    });

    const fieldIsAgree = useWatch({ control: form.control, name: fieldNameBookingTrainingIsAgree });

    const { mutate: addContact } = useCreateUnisenderContact({
        onSuccess: () => {
            form.reset();
            modal.handleOpen(modalNameSuccessForm);
        },
    });

    const handleSubmit = form.handleSubmit((data) => addContact({ type: modalNameTraining, ...data }));

    return {
        ...modal,
        form,
        isAgree: !fieldIsAgree,
        handleSubmit,
    };
};
