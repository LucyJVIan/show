import * as Dialog from '@radix-ui/react-dialog';
import { CSSProperties } from 'styled-components';

export interface ModalProps {
    title: string;
    description: string;
    isVisible: boolean;
    isHeadless?: boolean;
    height?: CSSProperties['height'];
    children?: React.ReactNode;
    descriptionContainer?: typeof Dialog.Description;
    background?: CSSProperties['background'];
    colorIconClose?: CSSProperties['color'];
    isScrollable?: boolean;
    onClose?: VoidFunction;
    isPaddingInline?: boolean;
}
