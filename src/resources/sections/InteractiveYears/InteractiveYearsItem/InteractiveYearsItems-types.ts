export interface InteractiveYearsItemProps {
    year: string;
    image: string;
    text: string;
    activeYears: string;
    isBigPicture?: boolean;
    isDown?: boolean;
}

export interface InteractiveYearsItemHookProps {
    isBigPicture: boolean;
    activeYears: string;
    year: string;
}
