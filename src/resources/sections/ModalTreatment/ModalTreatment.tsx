import { memo, useMemo } from 'react';

import { ModalContent } from 'resources/components';
import { useModal } from 'resources/hooks';
import { useWindowWidth } from 'resources/hooks/app/useWindowWidth';

import { modalNameTreatment } from './ModalTreatment-constants';
import { ModalTreatmentProps } from './ModalTreatment-types';
import { GalleryList } from '../GalleryList/GalleryList';

export const ModalTreatment = memo<ModalTreatmentProps>((props) => {
    const { title, images } = props;

    const { isOpen, handleClose } = useModal();
    const windowWidth = useWindowWidth();

    const heightModal = useMemo(() => {
        if (windowWidth >= 1300) {
            return '659px';
        }
        if (windowWidth >= 1024) {
            return '579px';
        }
        return '609px';
    }, [windowWidth]);

    return (
        <ModalContent
            isVisible={isOpen(modalNameTreatment)}
            title={title}
            description={''}
            onClose={() => handleClose(modalNameTreatment)}
            height={heightModal}
            isScrollable
        >
            <GalleryList images={images} />
        </ModalContent>
    );
});

ModalTreatment.displayName = 'ModalTreatment';
