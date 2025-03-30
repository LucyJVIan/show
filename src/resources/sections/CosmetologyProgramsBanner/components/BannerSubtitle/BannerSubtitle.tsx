import { memo } from 'react';

import { Root, Subtitle } from './BannerSubtitle-styles';
import { BannerSubtitleProps } from './BannerSubtitle-types';

export const BannerSubtitle = memo<BannerSubtitleProps>((props) => {
    const { Icon, children } = props;

    return (
        <Root>
            <Icon width="30" />
            <Subtitle>{children}</Subtitle>
        </Root>
    );
});

BannerSubtitle.displayName = 'BannerSubtitle';
