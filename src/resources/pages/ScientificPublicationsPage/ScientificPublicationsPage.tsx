'use client';

import { memo } from 'react';

import { LayoutContainer } from 'resources/components';
import { breadcrumbs, publications } from 'resources/data/mocks';
import { ScientificReports, Breadcrumbs, Sidebar } from 'resources/sections';

import { Content, Root } from './ScientificPublicationsPage-styles';

export const ScientificPublicationsPage = memo(() => {
    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.publications} />

            <LayoutContainer>
                <Content>
                    <Sidebar items={publications} />

                    <ScientificReports />
                </Content>
            </LayoutContainer>
        </Root>
    );
});

ScientificPublicationsPage.displayName = 'ScientificPublicationsPage';
