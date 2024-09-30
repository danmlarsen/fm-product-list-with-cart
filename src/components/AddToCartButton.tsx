import IconAddToCart from '../assets/images/icon-add-to-cart.svg';
import IconDecrement from '../assets/images/icon-decrement-quantity.svg';
import IconIncrement from '../assets/images/icon-increment-quantity.svg';

type AppProps = {
    cartAmount: number;
    onAdd: () => void;
    onDecrement: () => void;
    onIncrement: () => void;
};

export default function AddToCartButton({ cartAmount, onAdd }: AppProps) {
    const baseClasses = 'w-[160px] h-[44px] p-3 flex items-center justify-center gap-2 font-semibold rounded-full transition duration-200';

    return cartAmount > 0 ? (
        <div className={`${baseClasses} justify-between bg-red text-white border border-red`}>
            <button>
                <img src={IconDecrement} alt="Decrement icon" />
            </button>
            <span>{cartAmount}</span>
            <button>
                <img src={IconIncrement} alt="Increment icon" />
            </button>
        </div>
    ) : (
        <button className={`${baseClasses} bg-white border border-rose-400 hover:border-red hover:text-red`} onClick={onAdd}>
            <img src={IconAddToCart} alt="Add to cart icon" />
            <span>Add to Cart</span>
        </button>
    );
}
