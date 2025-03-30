import { memo, useCallback, useEffect, useState } from 'react';

import { useWindowWidth } from 'resources/hooks';
import { useOutsideClick } from 'resources/hooks/app/useClickOutside';

import { ShevronContainer, Header, List, Title, IconWrapper, ElementWrapper } from './Accordion-styles';
import { AccordionProps } from './Accordion-types';
import { IconChevron, IconNavigateRight } from '../Icons';
import { AccordionItem } from './AccordionItem/AccordionItem';

export const Accordion = memo<AccordionProps>((props) => {
    const { items, isSidebar } = props;
    const [isOpen, setIsOpen] = useState<Record<number, boolean>>({});
    const [isActive, setIsActive] = useState<Record<number, number | null>>({});

    const windowWidth = useWindowWidth();

    const refs = useOutsideClick((index) => {
        if (windowWidth <= 1300) {
            setIsOpen((prevState) => ({
                ...prevState,
                [index]: false,
            }));
        }
    });

    const toggleAccordion = useCallback(
        (index: number) => {
            setIsOpen((prevState) => {
                if (windowWidth <= 1300) {
                    return {
                        ...prevState,
                        [index]: !prevState[index],
                    };
                } else {
                    const newState = Object.keys(prevState).reduce(
                        (acc, key) => {
                            acc[+key] = false;
                            return acc;
                        },
                        {} as Record<number, boolean>,
                    );
                    return {
                        ...newState,
                        [index]: !prevState[index],
                    };
                }
            });
        },
        [windowWidth],
    );

    const handleItemClick = (index: number, adjustedIdx: number) => {
        if (windowWidth <= 1300) {
            setIsOpen((prevState) => ({
                ...prevState,
                [index]: true,
            }));
        } else {
            setIsOpen({});
        }
        setIsActive((prevState) => ({
            ...prevState,
            [index]: adjustedIdx,
        }));
    };

    useEffect(() => {
        if (isSidebar) {
            if (windowWidth >= 1300) {
                setIsOpen({ 0: true });
            } else {
                setIsOpen({});
            }
        }
    }, [windowWidth, isSidebar]);

    return (
        <>
            {items.map((item, index) => (
                <List
                    key={index}
                    $isOpen={isOpen[index]}
                    $isSingle={items.length === 1}
                    $isSidebar={isSidebar}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleAccordion(index);
                    }}
                    ref={(el) => {
                        refs.current[index] = el;
                    }}
                >
                    <Header $isOpen={isOpen[index]} $isSidebar={isSidebar}>
                        <Title>{item.title}</Title>

                        {isSidebar ? (
                            <ShevronContainer $isOpen={isOpen[index]}>
                                <IconChevron />
                            </ShevronContainer>
                        ) : (
                            <IconWrapper $isOpen={isOpen[index]}>
                                <IconNavigateRight />
                            </IconWrapper>
                        )}
                    </Header>

                    <ElementWrapper $isOpen={isOpen[index]} $isSidebar={isSidebar}>
                        <AccordionItem
                            item={item}
                            index={index}
                            isOpen={isOpen[index]}
                            isActive={isActive[index]}
                            isSidebar={isSidebar}
                            handleItemClick={handleItemClick}
                        />
                    </ElementWrapper>
                </List>
            ))}
        </>
    );
});

Accordion.displayName = 'Accordion';
