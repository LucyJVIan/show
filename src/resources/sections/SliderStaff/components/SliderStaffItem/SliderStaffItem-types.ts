import { Card } from '../index';

export interface Slide {
    name: string;
    image: string;
    description: string;
    moreLink: string;
    cards: Card[];
}

export interface SliderStaffItemProps {
    slide: Slide;
}
