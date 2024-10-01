import IconAddToCart from '../assets/images/icon-add-to-cart.svg';

type AppProps = {
    cartAmount: number;
    onAdd: () => void;
    onDecrement: () => void;
    onIncrement: () => void;
};

export default function AddToCartButton({ cartAmount, onAdd, onDecrement, onIncrement }: AppProps) {
    const baseClasses = 'w-[160px] h-[44px] p-3 flex items-center justify-center gap-2 font-semibold rounded-full transition duration-200';

    return cartAmount > 0 ? (
        <div className={`${baseClasses} justify-between bg-red text-white border border-red`}>
            <button className="size-5 flex items-center justify-center rounded-full border-2 transition duration-200 hover:bg-white hover:text-red" onClick={onDecrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                    <path style={{ fill: 'currentcolor' }} d="M0 .375h10v1.25H0V.375Z" />
                </svg>
            </button>
            <span className="min-w-5 text-center">{cartAmount}</span>
            <button className="size-5 flex items-center justify-center rounded-full border-2 transition duration-200 hover:bg-white hover:text-red" onClick={onIncrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path style={{ fill: 'currentcolor' }} d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
            </button>
        </div>
    ) : (
        <button className={`${baseClasses} bg-white border border-rose-400 hover:border-red hover:text-red`} onClick={onAdd}>
            <img src={IconAddToCart} alt="Add to cart icon" />
            <span>Add to Cart</span>
        </button>
    );
}
