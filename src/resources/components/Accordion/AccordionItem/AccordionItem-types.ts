import { AccordionItemType } from 'resources/types';

export interface AccordionItemProps {
    item: AccordionItemType;
    index: number;
    isOpen: boolean;
    isActive: number | null;
    isSidebar: boolean | undefined;
    handleItemClick: (index: number, adjustedIdx: number) => void;
}
