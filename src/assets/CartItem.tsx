import { CartItemType } from '../Cart';

import IconRemoveItem from '../assets/images/icon-remove-item.svg';

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
                <button className="border-2 border-rose-400 rounded-full size-5 flex items-center justify-center" onClick={() => onRemoveItem(name)}>
                    <img src={IconRemoveItem} alt="" />
                </button>
            </div>
        </li>
    );
}
