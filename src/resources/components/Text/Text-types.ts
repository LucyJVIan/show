import { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react';

export interface TextProps extends ComponentPropsWithoutRef<ElementType> {
    mode?: string;
    className?: string;
    style?: CSSProperties;
    align?: CSSProperties['textAlign'];
}
