import Link from 'next/link';
import { Fragment, memo } from 'react';

import { IconBreadcrumbs, LayoutContainer } from 'resources/components';

import { PageName, Root, Title, IconWrapper } from './Breadcrumbs-styles';
import { BreadcrumbsProps } from './Breadcrumbs-types';

export const Breadcrumbs = memo<BreadcrumbsProps>((props) => {
    const { items } = props;

    if (items.length === 0) {
        return null;
    }

    return (
        <LayoutContainer>
            <Root>
                <Link href="/">
                    <Title>Главная</Title>
                </Link>

                <IconWrapper>
                    <IconBreadcrumbs />
                </IconWrapper>

                {items.map((item, index) => {
                    const isLast = item === items[items.length - 1];

                    return item.link && !isLast ? (
                        <Fragment key={index}>
                            <Link href={item.link} title={item.title}>
                                <PageName>{item.title}</PageName>
                            </Link>

                            <IconWrapper>
                                <IconBreadcrumbs />
                            </IconWrapper>
                        </Fragment>
                    ) : (
                        <PageName key={index}>{item.title}</PageName>
                    );
                })}
            </Root>
        </LayoutContainer>
    );
});

Breadcrumbs.displayName = 'Breadcrumbs';
