import { CartItemType } from '../Cart';

type AppProps = {
    cartItem: CartItemType;
    onRemoveItem: (name: string) => void;
};

export default function CartItem({ cartItem, onRemoveItem }: AppProps) {
    const { name, price, amount } = cartItem;

    const totalPrice = price * amount;

    return (
        <li className="flex items-center justify-between text-sm py-4 border-b border-b-rose-100">
            <div>
                <h3 className="font-semibold">{name}</h3>
                <div className="flex gap-2 text-rose-500">
                    <span className="text-red font-semibold">{amount}x</span>
                    <span>@ ${price.toFixed(2)}</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <button
                    className="border-2 border-rose-400 rounded-full size-5 flex items-center justify-center text-rose-400 transition duration-200 hover:border-black hover:text-black"
                    onClick={() => onRemoveItem(name)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path style={{ fill: 'currentcolor' }} d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                    </svg>
                </button>
            </div>
        </li>
    );
}
