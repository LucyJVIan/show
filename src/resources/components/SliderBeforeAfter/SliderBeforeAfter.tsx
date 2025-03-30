import React, { memo } from 'react';

import { SliderBeforeAfterProps } from 'resources/components';

import { Image, Root, Figure, IconArrow } from './SliderBeforeAfter-styles';

export const SliderBeforeAfter = memo<SliderBeforeAfterProps>((props) => {
    const { firstImage, secondImage, firstAlt, secondAlt, miniGallery } = props;

    return (
        <Root>
            <Figure slot="first" className="before" data-before="До" $miniGallery={miniGallery}>
                <Image src={firstImage} alt={firstAlt || 'first'} />
            </Figure>

            <Figure slot="second" className="after" data-after="После" $miniGallery={miniGallery}>
                <Image src={secondImage} alt={secondAlt || 'second'} />
            </Figure>

            <IconArrow slot="handle" />
        </Root>
    );
});

SliderBeforeAfter.displayName = 'SliderBeforeAfter';
