import { ValueOf } from 'resources/types/valueOf';

export const deviceOrientation = {
    portrait: 'Portrait',
    landscape: 'Landscape',
} as const;

export const moreMediaQuery = (minWidth: number, orientation?: ValueOf<typeof deviceOrientation>): string => {
    if (orientation === deviceOrientation.landscape) {
        return `@media screen and (min-width: ${minWidth}px) and (orientation: landscape)`;
    }

    if (orientation === deviceOrientation.portrait) {
        return `@media screen and (min-width: ${minWidth}px) and (orientation: portrait)`;
    }

    return `@media screen and (min-width: ${minWidth}px)`;
};

export const lessMediaQuery = (maxWidth: number, orientation?: ValueOf<typeof deviceOrientation>) => {
    if (orientation === deviceOrientation.landscape) {
        return `@media screen and (max-width: ${maxWidth - 1}px) and (orientation: landscape)`;
    }

    if (orientation === deviceOrientation.portrait) {
        return `@media screen and (max-width: ${maxWidth - 1}px) and (orientation: portrait)`;
    }

    return `@media screen and (max-width: ${maxWidth - 1}px)`;
};
