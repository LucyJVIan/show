import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

import { IconLogo } from 'resources/components';
import { useAppRoute } from 'resources/hooks';

import { Root } from './CompanyLogo-styles';
import { CompanyLogoProps } from './CompanyLogo-types';

export const CompanyLogo = memo<CompanyLogoProps>((props) => {
    const { className } = props;

    const pathname = usePathname();
    const pathnameHome = useAppRoute('home');

    const isHome = pathname === pathnameHome;

    return isHome ? (
        <Root className={className}>
            <IconLogo />
        </Root>
    ) : (
        <Root className={className} as={Link} href={pathnameHome}>
            <IconLogo />
        </Root>
    );
});

CompanyLogo.displayName = 'CompanyLogo';
