import { Slide } from './components';

export interface SliderStaffProps {
    slides: Slide[];
    isMainRounded?: boolean;
}

export interface SliderBodyProps {
    $translateX: string;
}
