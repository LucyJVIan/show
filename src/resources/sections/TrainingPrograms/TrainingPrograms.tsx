'use client';

import { Fragment, memo, useMemo } from 'react';

import { Button, Text } from 'resources/components';
import { trainingPrograms } from 'resources/data/mocks';
import { usePagination } from 'resources/hooks';

import { Root, Container, ButtonWrapper } from './TrainingPrograms-styles';
import { TrainingProgramsItem } from './TrainingProgramsItem';

export const TrainingPrograms = memo(() => {
    const { visibleCount, handleLoadMore } = usePagination(3, 3);

    const visibleItems = useMemo(() => trainingPrograms.slice(0, visibleCount), [visibleCount]);

    return (
        <Root>
            <Text mode="h2">Расписание учебных программ</Text>

            <Container>
                {visibleItems.map((element, index) => (
                    <Fragment key={index}>
                        <TrainingProgramsItem
                            image={element.image}
                            header={element.header}
                            text={element.text}
                            direction={index % 2 ? 'rtl' : 'ltr'}
                        />
                    </Fragment>
                ))}

                {visibleCount < trainingPrograms.length && (
                    <ButtonWrapper>
                        <Button mode="secondary" onClick={handleLoadMore}>
                            Показать ещё
                        </Button>
                    </ButtonWrapper>
                )}
            </Container>
        </Root>
    );
});

TrainingPrograms.displayName = 'TrainingPrograms';
