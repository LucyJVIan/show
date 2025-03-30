import { CSSProperties } from 'react';

export interface ContentItem {
    tag: string;
    style?: CSSProperties;
    content?: Array<string | ContentItem>;
    attributes?: { [key: string]: string };
}
