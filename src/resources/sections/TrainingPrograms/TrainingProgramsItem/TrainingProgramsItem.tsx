'use client';

import { memo, useCallback } from 'react';

import { Button, ModalTrigger, Text } from 'resources/components';
import { useModal } from 'resources/hooks';

import { Root, Image, TextContainer, Link, MiniDescription } from './TrainingProgramsItem-styles';
import { TrainingProgramsItemProps } from './TrainingProgramsItem-types';

export const TrainingProgramsItem = memo<TrainingProgramsItemProps>((props) => {
    const { image, header, text, direction } = props;

    const { handleOpen } = useModal();

    const handleOpenBookingTraining = useCallback(() => {
        handleOpen('subscribeTraining');
    }, [handleOpen]);

    return (
        <Root $direction={direction}>
            <Image src={image} alt="img" />

            <TextContainer $direction={direction}>
                <Text mode="h3">{header}</Text>

                <MiniDescription>{text}</MiniDescription>

                <Link href="#">
                    <ModalTrigger onClick={handleOpenBookingTraining} asChild>
                        <Button>Записаться</Button>
                    </ModalTrigger>
                </Link>
            </TextContainer>
        </Root>
    );
});

TrainingProgramsItem.displayName = 'TrainingProgramsItem';
