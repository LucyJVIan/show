import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { stateModal } from 'resources/data/atoms';

export const useModal = () => {
    const [openModals, setStateModal] = useRecoilState(stateModal);

    const handleClose = useCallback(
        (closeModalName: string) => {
            if (closeModalName) {
                setStateModal((prev) => prev.filter((nameModal) => nameModal === closeModalName));
            }
        },
        [setStateModal],
    );

    const handleCloseAllModal = useCallback(() => {
        setStateModal([]);
    }, [setStateModal]);

    const handleOpen = useCallback(
        (openModalName: string) => {
            if (openModalName) {
                setStateModal((prev) => setNewModalList(prev, openModalName));
            }
        },
        [setStateModal],
    );

    const isOpen = useCallback(
        (name: string) => {
            return openModals.at(-1) === name;
        },
        [openModals],
    );

    return {
        isOpen,
        handleOpen,
        handleClose,
        handleCloseAllModal,
    };
};

const setNewModalList = (modals: string[], newModalName: string) => [
    ...modals.filter((modal) => modal !== newModalName),
    newModalName,
];
