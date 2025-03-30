import { useState, useCallback } from 'react';

export const usePagination = (initialCount: number, loadMoreCount: number) => {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleLoadMore = useCallback(() => {
        setVisibleCount((prevCount) => prevCount + loadMoreCount);
    }, [loadMoreCount]);

    return { visibleCount, handleLoadMore };
};

usePagination.displayName = 'usePagination';
