import { LinkProps as NextLinkProps } from 'next/link';
import { HTMLAttributes, PropsWithChildren } from 'react';

export type LinkProps = NextLinkProps &
    PropsWithChildren &
    HTMLAttributes<HTMLAnchorElement> & {
        disabled?: boolean;
    };
