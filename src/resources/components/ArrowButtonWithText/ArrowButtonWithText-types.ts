import { ButtonHTMLAttributes } from 'react';

export interface ArrowButtonWithTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    isBack?: boolean;
}
