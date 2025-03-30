import { CSSProperties } from 'styled-components';

export const objectStyleToCss = (style: CSSProperties): CSSProperties => {
    const newStyle: CSSProperties = {};

    Object.entries(style).forEach(([key, value]) => {
        const camelCaseKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        newStyle[camelCaseKey as keyof CSSProperties] = value;
    });

    return newStyle;
};
