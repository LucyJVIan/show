'use client';

import { useParams } from 'next/navigation';
import { memo } from 'react';

import { LayoutContainer } from 'resources/components';
import { breadcrumbs, publications, scientificReports } from 'resources/data/mocks';
import { Sidebar, Publication, Breadcrumbs } from 'resources/sections';

import { Content, Root } from './PublicationPage-styles';

export const PublicationPage = memo(() => {
    const params = useParams();

    const { slug } = params;

    const publicationData = scientificReports.find((item) => item.slug === slug);

    if (!publicationData) {
        return <>Публикация не найдена</>;
    }

    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.publications} />

            <LayoutContainer>
                <Content>
                    <Sidebar items={publications} />

                    <Publication report={publicationData} />
                </Content>
            </LayoutContainer>
        </Root>
    );
});

PublicationPage.displayName = 'PublicationPage';
