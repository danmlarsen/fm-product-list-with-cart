import { useEffect, useRef } from 'react';

type AppProps = {
    children: React.ReactNode;
    onBackdropClick: () => void;
};

export default function Modal({ children, onBackdropClick }: AppProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        modalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-70 z-10" onClick={onBackdropClick}></div>
            <div className="absolute md:fixed w-full max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" ref={modalRef}>
                {children}
            </div>
            ;
        </>
    );
}
