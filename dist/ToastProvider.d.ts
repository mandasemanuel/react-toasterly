import { ReactNode } from 'react';
type ToastType = "success" | "error" | "info";
interface ToastContextProps {
    addToast: (message: string, type?: ToastType) => void;
}
export declare const useToast: () => ToastContextProps;
export declare const ToastProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
