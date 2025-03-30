import { GalleryTreatmentItemType } from 'resources/sections';

export interface GalleryTreatmentItemProps extends GalleryTreatmentItemType {
    onClickItem?: (item: GalleryTreatmentItemType) => void;
    isWide?: boolean;
}
