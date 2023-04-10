import React from "react";

export type OnClickType<T> = (e: T) => void;
export type OnChangeType<T> = (e: T) => void;
export type RenderFunctionType <T> = (value: T) => React.ReactNode;
