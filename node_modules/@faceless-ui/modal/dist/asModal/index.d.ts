import React from 'react';
import { ModalProps } from '../Modal';
export declare const itemBaseClass = "modal-item";
declare const asModal: <P extends ModalProps>(ModalComponent: React.FC<P>, slugFromArg?: string | undefined) => React.FC<P>;
export default asModal;
