import { memo } from 'react';

import { IconPhoneV2, IconVK, IconTelegram } from 'resources/components';

import { SocialRoot, SocialLink, SocialVerticalWrapper } from './Social-styles';
import { SocialProps } from './Social-types';

export const Social = memo<SocialProps>((props) => {
    const { isVertical, ...restProps } = props;

    return (
        <SocialRoot {...restProps} as={isVertical ? SocialVerticalWrapper : undefined}>
            <SocialLink href="#">
                <IconPhoneV2 />
            </SocialLink>

            <SocialLink href="#">
                <IconVK />
            </SocialLink>

            <SocialLink href="#">
                <IconTelegram />
            </SocialLink>
        </SocialRoot>
    );
});

Social.displayName = 'Social';
