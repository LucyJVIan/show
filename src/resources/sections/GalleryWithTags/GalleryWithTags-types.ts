export interface GalleryTreatmentItem {
    title: string;
    firstImage: string;
    secondImage: string;
    link: string;
    tags: string[];
}

export type GalleryWithTagsProps = {
    items: GalleryTreatmentItem[];
};
