import { memo, useMemo } from 'react';

import { Button } from 'resources/components';
import { scientificReports } from 'resources/data/mocks/scientificReports';
import { usePagination } from 'resources/hooks';

import { ReportCard } from './components/ReportCard';
import { Root } from './ScientificReports-styles';
import { ButtonWrapper } from '../GalleryWithTags/GalleryWithTags-styles';

export const ScientificReports = memo(() => {
    const { visibleCount, handleLoadMore } = usePagination(3, 3);

    const visibleItems = useMemo(() => scientificReports.slice(0, visibleCount), [visibleCount]);

    return (
        <Root>
            {visibleItems.map((item, index) => (
                <div key={index}>
                    <ReportCard
                        tag={item.tag}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        image={item.image}
                        slug={item.slug}
                    />
                </div>
            ))}

            {visibleCount < scientificReports.length && (
                <ButtonWrapper>
                    <Button mode="secondary" onClick={handleLoadMore}>
                        Показать ещё
                    </Button>
                </ButtonWrapper>
            )}
        </Root>
    );
});

ScientificReports.displayName = 'ScientificReports';
