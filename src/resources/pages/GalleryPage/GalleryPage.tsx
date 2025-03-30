'use client';

import { memo } from 'react';

import { breadcrumbs, gallery } from 'resources/data/mocks';
import { Breadcrumbs, GalleryWithTags } from 'resources/sections';

import { Root } from './GalleryPage-styles';

export const GalleryPage = memo(() => {
    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.gallery} />

            <GalleryWithTags items={gallery} />
        </Root>
    );
});

GalleryPage.displayName = 'GalleryPage';
