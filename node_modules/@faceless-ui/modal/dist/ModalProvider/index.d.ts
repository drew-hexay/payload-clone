import React from 'react';
import { ModalState } from './context';
export declare type ModalProviderProps = {
    generateCSS?: boolean;
    minifyCSS?: boolean;
    classPrefix?: string;
    handleParamChange?: (modalState: ModalState) => void | boolean;
    transTime?: number;
    zIndex?: number | string;
    children?: React.ReactNode;
};
declare const ModalProvider: React.FC<ModalProviderProps>;
export default ModalProvider;
