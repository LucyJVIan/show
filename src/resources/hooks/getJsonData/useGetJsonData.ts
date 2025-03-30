import { useState, useEffect } from 'react';

import { getJson } from 'resources/data/api';
import { ContentItem } from 'resources/types';

export const useJsonData = (pageName: string) => {
    const [jsonData, setJsonData] = useState<ContentItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getJson(pageName);
                setJsonData(data ?? []);
            } catch (error) {
                console.error(`Failed to load JSON for page: ${pageName}`, error);
                setJsonData([]);
            }
        };

        fetchData();
    }, [pageName]);

    return jsonData;
};
