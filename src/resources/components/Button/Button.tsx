import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Root } from './Button-styles';
import { ButtonProps } from './Button-types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { mode = 'accent', className, asChild, ...restProps } = props;

    const as = asChild ? Slot : undefined;

    return <Root as={as} $mode={mode} className={className} ref={ref} {...restProps} />;
});

Button.displayName = 'Button';
