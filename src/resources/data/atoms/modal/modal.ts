import { atom } from 'recoil';

import { ModalState } from './modal-types';

export const stateModal = atom<ModalState>({
    key: 'modalState',
    default: [],
});
