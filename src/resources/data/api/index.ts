import { ContentItem } from 'resources/types';

import { ApiUnisender } from './ApiUnisender';
import { ApiVersion1 } from './ApiVersion1';

export const getApi = (version: 'v1' | 'unisender' = 'v1') => {
    switch (version) {
        case 'unisender':
            return ApiUnisender;

        case 'v1':
        default:
            return ApiVersion1;
    }
};

export const getJson = async (pageName: string): Promise<ContentItem[] | null> => {
    try {
        const json = await import(`resources/data/api/mockApi/${pageName}.json`);
        return json.default;
    } catch (error) {
        console.error(`Error loading JSON: ${pageName}`, error);
        return null;
    }
};
