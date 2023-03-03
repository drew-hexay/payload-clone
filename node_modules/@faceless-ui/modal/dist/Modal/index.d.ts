import * as focusTrap from 'focus-trap';
import React, { ElementType, HTMLProps } from 'react';
import { IModalContext } from '../ModalProvider/context';
export declare type ModalPropsWithContext = ModalProps & {
    modal?: IModalContext;
};
export declare type ChildFunction = (propsWithContext: ModalPropsWithContext) => React.ReactNode;
export interface ModalProps extends Omit<HTMLProps<HTMLElement>, 'children'> {
    slug: string;
    closeOnBlur?: boolean;
    lockBodyScroll?: boolean;
    htmlElement?: ElementType;
    classPrefix?: string;
    onOpen?: () => void;
    onClose?: () => void;
    onEnter?: () => void;
    onEntered?: () => void;
    onEntering?: () => void;
    onExit?: () => void;
    onExiting?: () => void;
    onExited?: () => void;
    openOnInit?: boolean;
    children?: React.ReactNode | ChildFunction;
    trapFocus?: boolean;
    focusTrapOptions?: focusTrap.Options;
}
declare const _default: React.FC<ModalProps & {
    modal?: IModalContext | undefined;
} & {
    children?: React.ReactNode | ChildFunction;
}>;
export default _default;
