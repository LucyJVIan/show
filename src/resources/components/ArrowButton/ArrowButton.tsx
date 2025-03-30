import { forwardRef } from 'react';

import { IconNavigateLeft, IconNavigateRight } from 'resources/components';

import { Root, RootIcon } from './ArrowButton-styles';
import { ArrowButtonProps } from './ArrowButton-types';

export const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>((props, ref) => {
    const { className, mode, ...restProps } = props;

    return (
        <Root className={className} ref={ref} {...restProps}>
            <RootIcon>{mode === 'right' ? <IconNavigateRight /> : <IconNavigateLeft />}</RootIcon>
        </Root>
    );
});

ArrowButton.displayName = 'ArrowButton';
