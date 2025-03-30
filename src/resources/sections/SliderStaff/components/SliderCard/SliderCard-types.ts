import { FC, SVGProps } from 'react';

export interface SliderCardProps {
    className?: string;
    card: Card;
}

export interface Card {
    title: string;
    description: string;
    icon: FC<SVGProps<SVGSVGElement>>;
}
