import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { IconArrow } from 'resources/components';

import { Root, IconWrap, BackWrapper } from './ArrowButtonWithText-styles';
import { ArrowButtonWithTextProps } from './ArrowButtonWithText-types';

export const ArrowButtonWithText = forwardRef<HTMLButtonElement, ArrowButtonWithTextProps>((props, ref) => {
    const { className, asChild, isBack, children, ...restProps } = props;
    const as = asChild ? Slot : isBack ? BackWrapper : undefined;

    return (
        <Root as={as} className={className} ref={ref} {...restProps}>
            {children}

            <IconWrap>
                <IconArrow />
            </IconWrap>
        </Root>
    );
});

ArrowButtonWithText.displayName = 'ArrowButtonWithText';
