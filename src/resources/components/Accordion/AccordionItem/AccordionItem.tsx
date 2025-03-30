import { memo, useCallback } from 'react';

import { Element } from './AccordionItem-styles';
import { AccordionItemProps } from './AccordionItem-types';

export const AccordionItem = memo<AccordionItemProps>((props) => {
    const { item, index, isOpen, isSidebar, handleItemClick, isActive } = props;

    const renderItemList = useCallback(() => {
        return (
            isOpen &&
            item.list.map((li: string, idx: number) => (
                <Element
                    key={idx}
                    onClick={() => handleItemClick(index, idx)}
                    $isActive={isActive === idx}
                    $isSidebar={isSidebar}
                >
                    {li}
                </Element>
            ))
        );
    }, [isOpen, item.list, index, handleItemClick, isActive, isSidebar]);

    return <>{renderItemList()}</>;
});

AccordionItem.displayName = 'AccordionItem';
