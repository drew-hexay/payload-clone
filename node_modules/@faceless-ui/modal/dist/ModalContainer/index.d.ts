import React, { ElementType, HTMLProps } from 'react';
export declare const containerBaseClass = "modal-container";
export declare type ModalContainerProps = HTMLProps<HTMLElement> & {
    htmlElement?: ElementType;
    children?: React.ReactNode;
};
declare const ModalContainer: React.FC<ModalContainerProps>;
export default ModalContainer;
