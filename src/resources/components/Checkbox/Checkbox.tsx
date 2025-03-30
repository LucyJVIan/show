import { forwardRef } from 'react';

import { IconCheck } from 'resources/components';

import { Root, Wrap, IconWrap } from './Checkbox-styles';
import { CheckboxProps } from './Checkbox-types';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
    const { children, ...restProps } = props;

    return (
        <Root>
            <Wrap {...restProps} ref={ref}>
                <IconWrap>
                    <IconCheck />
                </IconWrap>
            </Wrap>
            {children}
        </Root>
    );
});

Checkbox.displayName = 'Checkbox';
