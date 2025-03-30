import { useCallback, useRef } from 'react';

import { useWindowWidth } from 'resources/hooks';

export const useCenteredWrapper = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const windowWidth = useWindowWidth();

    const centerBlock = useCallback((wrapperRef: React.RefObject<HTMLDivElement>) => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTo({
                left: (wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth) / 2,
                behavior: 'smooth',
            });
        }
    }, []);

    const setWrapperRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (node) {
                wrapperRef.current = node;
                centerBlock(wrapperRef);
            }
        },
        [centerBlock],
    );

    if (windowWidth && wrapperRef.current) {
        centerBlock(wrapperRef);
    }

    return { wrapperRef, setWrapperRef, centerBlock };
};
