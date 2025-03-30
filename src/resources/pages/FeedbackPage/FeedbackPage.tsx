'use client';

import { memo, useMemo, useState } from 'react';

import { Button, LayoutContainer } from 'resources/components';
import { breadcrumbs, tabs, feedbacks } from 'resources/data/mocks';
import { usePagination } from 'resources/hooks';
import { Breadcrumbs, TabSwitch, FeedbackForm } from 'resources/sections';
import { FeedbackBoxItem } from 'resources/sections/FeedbackBox/components/FeedbackBoxItem';

import { ButtonWrapper, ItemsContainer, Root, Wrapper } from './FeedbackPage-styles';

export const FeedbackPage = memo(() => {
    const { visibleCount, handleLoadMore } = usePagination(6, 6);

    const [activeTab, setActiveTab] = useState(0);

    const visibleItems = useMemo(() => feedbacks.slice(0, visibleCount), [visibleCount]);

    return (
        <Root>
            <Breadcrumbs items={breadcrumbs.feedback} />

            <LayoutContainer>
                <TabSwitch tabs={tabs.feedback} activeTab={activeTab} setActiveTab={setActiveTab} />
            </LayoutContainer>

            <LayoutContainer>
                <Wrapper>
                    {!activeTab &&
                        visibleItems.map((elem, idx) => (
                            <ItemsContainer key={idx}>
                                <FeedbackBoxItem
                                    name={elem.name}
                                    text={elem.text}
                                    date={elem.date}
                                    procedure={elem.procedure}
                                    feedbackImage={elem.feedbackImage}
                                    isFull
                                />
                            </ItemsContainer>
                        ))}
                </Wrapper>

                {visibleCount < feedbacks.length && !activeTab && (
                    <ButtonWrapper>
                        <Button onClick={handleLoadMore}>Показать ещё</Button>
                    </ButtonWrapper>
                )}
            </LayoutContainer>

            <LayoutContainer>
                <FeedbackForm />
            </LayoutContainer>
        </Root>
    );
});

FeedbackPage.displayName = 'FeedbackPage';
