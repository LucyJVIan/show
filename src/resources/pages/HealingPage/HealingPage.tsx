'use client';

import { memo } from 'react';

import { LayoutContainer } from 'resources/components';
import { galleryTreatments, breadcrumbs } from 'resources/data/mocks';
import { Gallery, GalleryTreatment, FeedbackBox, Breadcrumbs } from 'resources/sections';

import { Body, Root } from './HealignPage-styles';

export const HealingPage = memo(() => {
    return (
        <Root>
            <LayoutContainer>
                <Body>
                    <Breadcrumbs items={breadcrumbs.healing} />

                    <GalleryTreatment
                        items={galleryTreatments}
                        title="Авторские методики лечения косметологических проблем Ларисы Радецкой"
                    />
                </Body>
            </LayoutContainer>

            <Gallery />

            <FeedbackBox />
        </Root>
    );
});

HealingPage.displayName = 'HealingPage';
