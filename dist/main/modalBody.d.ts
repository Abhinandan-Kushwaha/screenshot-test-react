import React from "react";
interface ModalBodyProps {
    title: string;
    body?: any;
    onDismiss: () => void;
}
export declare const ModalBody: (props: ModalBodyProps) => React.JSX.Element;
export declare const Loader: ({ offset, batchSize, }: {
    offset: number;
    batchSize: number;
}) => React.JSX.Element;
export {};
