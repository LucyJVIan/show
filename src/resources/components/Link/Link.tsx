import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import * as NextLink from 'next/link';
import React, { forwardRef, memo } from 'react';

import { LinkProps } from './Link-types';
import { isExternalLink } from './Link-utils';

export const Link = memo(
    forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
        const { href, children, ...restProps } = props;

        return isString(href) && isExternalLink(href) ? (
            <a href={href} rel="noopener noreferrer" target="_blank" {...restProps} ref={ref}>
                {children}
            </a>
        ) : (
            <NextLink.default href={href} passHref {...restProps} ref={ref}>
                {children}
            </NextLink.default>
        );
    }),
);

Link.displayName = 'Link';
