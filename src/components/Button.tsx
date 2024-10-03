type AppProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export default function Button({ children, onClick }: AppProps) {
    return (
        <button className="py-4 px-6 w-full bg-red text-white font-semibold rounded-full transition duration-300 hover:bg-dark-red" onClick={onClick}>
            {children}
        </button>
    );
}
