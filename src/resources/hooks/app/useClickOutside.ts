import { useEffect, useRef } from 'react';

export const useOutsideClick = (onClickOutside: (index: number) => void) => {
    const refs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            refs.current.forEach((ref, index) => {
                if (ref && !ref.contains(event.target as HTMLElement)) {
                    onClickOutside(index);
                }
            });
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClickOutside]);

    return refs;
};
