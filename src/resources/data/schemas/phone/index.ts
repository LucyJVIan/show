import * as z from 'zod';

import { phoneRegex } from 'resources/utils';

export const phoneSchema = z
    .string({
        message: 'Введите телефон',
    })
    .min(1, 'Введите телефон')
    .refine((phone) => phoneRegex.test(phone), {
        message: 'Телефон должен начинаться с + и содержать только цифры',
    });
