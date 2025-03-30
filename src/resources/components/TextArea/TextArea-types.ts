import { InputHTMLAttributes, RefObject } from 'react';

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string;
    containerRef?: RefObject<HTMLDivElement>;
}
