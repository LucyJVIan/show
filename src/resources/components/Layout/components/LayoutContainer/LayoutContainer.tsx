import { memo, PropsWithChildren } from 'react';

import { Root } from './LayoutContainer-styles';

export const LayoutContainer = memo((props: PropsWithChildren & { className?: string }) => {
    const { children, className } = props;

    return <Root className={className}>{children}</Root>;
});

LayoutContainer.displayName = 'LayoutContainer';
