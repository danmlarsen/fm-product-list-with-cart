import { CartItemType } from '../Cart';

type AppProps = {
    orderItem: CartItemType;
};

export default function ConfirmedOrderItem({ orderItem }: AppProps) {
    const { name, price, amount, image } = orderItem;

    const totalPrice = price * amount;

    return (
        <li className="flex items-center justify-between text-sm py-4 border-b border-b-rose-100">
            <div className="flex items-center gap-4">
                <div className="size-12">
                    <img src={image} alt={`Thumbnail of ${name}`} />
                </div>
                <div>
                    {' '}
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex gap-2 text-rose-500">
                        <span className="text-red font-semibold">{amount}x</span>
                        <span>@ ${price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="text-base font-semibold">${totalPrice.toFixed(2)}</div>
        </li>
    );
}
