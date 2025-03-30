import { InputHTMLAttributes, RefObject } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    containerRef?: RefObject<HTMLDivElement>;
}
