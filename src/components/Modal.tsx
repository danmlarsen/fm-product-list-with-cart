type AppProps = {
    children: React.ReactNode;
    onBackdropClick: () => void;
};

export default function Modal({ children, onBackdropClick }: AppProps) {
    return (
        <>
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-70 z-10" onClick={onBackdropClick}></div>
            <div className="fixed w-full max-w-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">{children}</div>;
        </>
    );
}
