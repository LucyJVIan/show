import { forwardRef } from 'react';

import { TextAreaMessage, TextAreaField, TextAreaContainer } from './TextArea-styles';
import { TextAreaProps } from './TextArea-types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { errorMessage, containerRef, ...restProps } = props;

    return (
        <TextAreaContainer ref={containerRef}>
            <TextAreaField {...restProps} ref={ref} />

            {errorMessage && (
                <TextAreaMessage role="alert" aria-live="assertive">
                    {errorMessage}
                </TextAreaMessage>
            )}
        </TextAreaContainer>
    );
});

TextArea.displayName = 'TextArea';
