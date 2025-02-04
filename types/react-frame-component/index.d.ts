// Type definitions for react-frame-component 4.1
// Project: https://github.com/ryanseddon/react-frame-component
// Definitions by: Alex Bukurov <https://github.com/abukurov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface FrameComponentProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    head?: React.ReactNode | undefined;
    mountTarget?: string | undefined;
    initialContent?: string | undefined;
    contentDidMount?: (() => void) | undefined;
    contentDidUpdate?: (() => void) | undefined;
    children: React.ReactNode;
}

export default class FrameComponent extends React.Component<FrameComponentProps> {}

export interface FrameContextProps {
    document?: HTMLDocument;
    window?: Window;
}

export const FrameContext: React.Context<FrameContextProps>;

export const FrameContextProvider: React.Provider<FrameContextProps>;

export const FrameContextConsumer: React.Consumer<FrameContextProps>;

export function useFrame(): FrameContextProps;
