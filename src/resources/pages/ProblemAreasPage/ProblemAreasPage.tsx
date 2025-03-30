'use client';

import { memo } from 'react';

import { LayoutContainer, ModalRoot } from 'resources/components';
import { breadcrumbs, galleryTreatments, problemsSidebar } from 'resources/data/mocks';
import { Sidebar, Breadcrumbs, Problems, ModalTreatment } from 'resources/sections';

import { Root, Content } from './ProblemAreasPage-styles';

export const ProblemAreasPage = memo(() => {
    return (
        <ModalRoot>
            <ModalTreatment {...galleryTreatments[1]} />

            <Root>
                <Breadcrumbs items={breadcrumbs.publications} />

                <LayoutContainer>
                    <Content>
                        <Sidebar items={problemsSidebar} />

                        <Problems />
                    </Content>
                </LayoutContainer>
            </Root>
        </ModalRoot>
    );
});

ProblemAreasPage.displayName = 'ProblemAreasPage';
