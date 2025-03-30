import * as z from 'zod';

import { phoneSchema } from '../phone';

export const fieldNameBookingQuickIsAgree = 'isAgree';
export const fieldNameBookingQuickPhone = 'phone';
export const fieldNameBookingQuickEmail = 'email';

export const bookingQuickSchema = z.object({
    [fieldNameBookingQuickEmail]: z.string({ message: 'Email не заполнен' }).email('Email неправильно заполнен'),
    [fieldNameBookingQuickPhone]: phoneSchema,
    [fieldNameBookingQuickIsAgree]: z.boolean().refine((val) => val, { message: 'Вы должны согласиться с условиями' }),
});

export type BookingQuickData = z.infer<typeof bookingQuickSchema>;
