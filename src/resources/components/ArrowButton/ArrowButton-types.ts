import { ButtonHTMLAttributes } from 'react';

export interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    mode: 'left' | 'right';
}
