import * as z from 'zod';

import { phoneSchema } from '../phone';

export const fieldNameBookingIsAgree = 'isAgree';
export const fieldNameBookingPhone = 'phone';
export const fieldNameEmail = 'email';
export const fieldNameUser = 'name';

export const bookingSchema = z.object({
    [fieldNameEmail]: z.string({ message: 'Email не заполнен' }).email('Email неправильно заполнен'),
    [fieldNameBookingPhone]: phoneSchema,
    [fieldNameUser]: z.string({ message: 'Имя не заполнено' }).min(1, { message: 'Имя не заполнен' }),
    [fieldNameBookingIsAgree]: z.boolean().refine((val) => val, { message: 'Вы должны согласиться с условиями' }),
});

export type BookingData = z.infer<typeof bookingSchema>;
