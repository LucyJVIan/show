import * as z from 'zod';

export const fieldNameFeedbackName = 'name';
export const fieldNameFeedbackMessage = 'message';
export const fieldNameFeedbackIsAgree = 'isAgree';

export const feedbackSchema = z.object({
    [fieldNameFeedbackName]: z.string({ message: 'Заполните имя' }).min(1, { message: 'Имя не заполнено' }),
    [fieldNameFeedbackMessage]: z.string({ message: 'Введите сообщение' }),
    [fieldNameFeedbackIsAgree]: z
        .boolean()
        .refine((val) => val, { message: 'Для отправки отзыва необходимо согласиться с условиями' }),
});

export type FeedbackData = z.infer<typeof feedbackSchema>;
