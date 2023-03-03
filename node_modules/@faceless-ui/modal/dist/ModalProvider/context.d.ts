/// <reference types="react" />
import { ModalProviderProps } from '../ModalProvider';
export declare type ModalStatus = {
    slug: string;
    isOpen: boolean;
    openedOn?: number;
};
export declare type ModalState = {
    [slug: string]: ModalStatus;
};
export interface IModalContext extends ModalProviderProps {
    transTime: number;
    containerRef: React.RefObject<HTMLElement>;
    modalState: ModalState;
    oneModalIsOpen: boolean;
    isModalOpen: (slug: string) => boolean;
    closeOnBlur: boolean;
    bodyScrollIsLocked: boolean;
    classPrefix?: string;
    closeAllModals: () => void;
    setCloseOnBlur: (set: boolean) => void;
    openModal: (slug: string) => void;
    closeModal: (slug: string) => void;
    toggleModal: (slug: string) => void;
    setContainerRef: (ref: HTMLElement) => void;
    setBodyScrollLock: (shouldLock: boolean, // eslint-disable-line no-unused-vars
    excludingRef: HTMLElement) => void;
}
export declare const ModalContext: import("react").Context<IModalContext>;
export default ModalContext;
