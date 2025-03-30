import React, { memo, useCallback, useState } from 'react';

import { IconEllipsis, IconNotepad, IconPhone, ModalTrigger } from 'resources/components';
import { useModal } from 'resources/hooks';

import { HeaderContactItem, HeaderContactItemText, HeaderSocialList, IconWrapper } from './HeaderActions-styles';
import { modalNameQuickSubscribe } from '../../../../sections/ModalQuickSubscribe/ModalQuickSubscribe-constants';
import { modalNameSubscribe } from '../../../../sections/ModalSubscribe/ModalSubscribe-constants';

export const HeaderActions = memo(() => {
    const [isSocialVisible, setIsSocialVisible] = useState(false);
    const { handleOpen } = useModal();

    const onOpenModalQuickBooking = useCallback(() => {
        handleOpen(modalNameQuickSubscribe);
    }, [handleOpen]);

    const onOpenModalAppointment = useCallback(() => {
        handleOpen(modalNameSubscribe);
    }, [handleOpen]);

    const onMouseEnter = useCallback(() => {
        setIsSocialVisible(true);
    }, [setIsSocialVisible]);

    const onMouseLeave = useCallback(() => {
        setIsSocialVisible(false);
    }, [setIsSocialVisible]);

    return (
        <>
            <ModalTrigger asChild>
                <HeaderContactItem onClick={onOpenModalQuickBooking}>
                    <IconWrapper>
                        <IconPhone />
                    </IconWrapper>
                    <HeaderContactItemText>Быстрая запись</HeaderContactItemText>
                </HeaderContactItem>
            </ModalTrigger>

            <ModalTrigger asChild>
                <HeaderContactItem onClick={onOpenModalAppointment}>
                    <IconWrapper>
                        <IconNotepad />
                    </IconWrapper>
                    <HeaderContactItemText>Записаться на прием</HeaderContactItemText>
                </HeaderContactItem>
            </ModalTrigger>

            <HeaderContactItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <IconEllipsis />
                <HeaderContactItemText>
                    Связаться
                    <br />в соц.сетях
                </HeaderContactItemText>

                {isSocialVisible && <HeaderSocialList onMouseEnter={onMouseEnter} />}
            </HeaderContactItem>
        </>
    );
});

HeaderActions.displayName = 'HeaderActions';
