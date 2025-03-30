import { LinkProps } from 'resources/components';

export interface GalleryCardProps extends LinkProps {
    image: string;
    title: string;
    isWide?: boolean;
}
