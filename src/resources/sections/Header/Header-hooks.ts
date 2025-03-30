import { useCallback, useState } from 'react';

export const useMobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = useCallback(() => setIsMenuOpen((prev) => !prev), [setIsMenuOpen]);

    return {
        isMenuOpen,
        handleMenuToggle,
    };
};
