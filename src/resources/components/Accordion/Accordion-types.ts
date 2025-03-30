import { AccordionItemType } from 'resources/types';

export interface AccordionProps {
    items: AccordionItemType[];
    isSidebar?: boolean;
}

export interface AccordionStyleProps {
    $isOpen?: boolean;
    $isSingle?: boolean;
    $isSidebar?: boolean;
    $isActive?: boolean;
}
