export interface BannerProps {
    title: string;
    description: string;
    buttonTitle: string;
    posterUrl: string;
    buttonOnClick?: VoidFunction;
    isModal?: boolean;
    isTraining?: boolean;
}
