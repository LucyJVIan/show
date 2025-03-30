import * as z from 'zod';

import { phoneSchema } from '../phone';

export const fieldNameBookingTrainingIsAgree = 'isAgree';
export const fieldNameBookingTrainingPhone = 'phone';
export const fieldNameBookingTrainingEmail = 'email';
export const fieldNameBookingTrainingUser = 'name';

export const bookingTrainingSchema = z.object({
    [fieldNameBookingTrainingEmail]: z.string({ message: 'Email не заполнен' }).email('Email неправильно заполнен'),
    [fieldNameBookingTrainingPhone]: phoneSchema,
    [fieldNameBookingTrainingUser]: z.string({ message: 'Имя не заполнено' }).min(1, { message: 'Имя не заполнено' }),
    [fieldNameBookingTrainingIsAgree]: z
        .boolean()
        .refine((val) => val, { message: 'Вы должны согласиться с условиями' }),
});

export type BookingTrainingData = z.infer<typeof bookingTrainingSchema>;
