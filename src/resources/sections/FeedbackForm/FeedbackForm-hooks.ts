import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FeedbackData, feedbackSchema } from 'resources/data/schemas';

export const useFeedbackForm = () => {
    const form = useForm<FeedbackData>({
        resolver: zodResolver(feedbackSchema),
    });

    const handleSubmit = form.handleSubmit(() => {
        alert('Sumitted');
        // TODO: implement after backend is ready
    });

    return {
        form,
        handleSubmit,
    };
};
