export const isExternalLink = (href?: string): boolean => {
    return !!href && (href.startsWith('http') || href.startsWith('www'));
};
