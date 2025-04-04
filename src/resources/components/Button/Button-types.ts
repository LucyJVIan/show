import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    mode?: 'accent' | 'secondary' | 'secondary white';
}
