import { forwardRef } from 'react';

import { InputContainer, InputMessage, InputTextField } from './Input-styles';
import { InputProps } from './Input-types';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { errorMessage, containerRef, ...restProps } = props;

    return (
        <InputContainer ref={containerRef}>
            <InputTextField {...restProps} ref={ref} />

            {errorMessage && (
                <InputMessage role="alert" aria-live="assertive">
                    {errorMessage}
                </InputMessage>
            )}
        </InputContainer>
    );
});

Input.displayName = 'Input';
