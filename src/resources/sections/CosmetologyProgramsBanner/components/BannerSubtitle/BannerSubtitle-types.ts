import { PropsWithChildren } from 'react';
import { FC, SVGProps } from 'react';

export interface BannerSubtitleProps extends PropsWithChildren {
    Icon: FC<SVGProps<SVGSVGElement>>;
}
