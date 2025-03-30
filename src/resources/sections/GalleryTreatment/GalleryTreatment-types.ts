import { Image } from 'resources/types';

export interface GalleryTreatmentItemType {
    title: string;
    images: Image[];
}

export interface GalleryTreatmentProps {
    items: GalleryTreatmentItemType[];
    title?: string;
}
