import React, { ElementType, HTMLProps } from 'react';
import { IModalContext } from '../ModalProvider/context';
export declare const togglerBaseClass = "modal-toggler";
export declare type ModalTogglerProps = HTMLProps<HTMLElement> & {
    slug: string;
    modal?: IModalContext;
    htmlElement?: ElementType;
    children?: React.ReactNode;
};
declare const ModalToggler: React.FC<ModalTogglerProps>;
export default ModalToggler;
