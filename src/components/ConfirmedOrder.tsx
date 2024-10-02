import ConfirmedOrderItem from './ConfirmedOrderItem';
import { CartItemType } from '../Cart';

import IconOrderConfirmed from '../assets/images/icon-order-confirmed.svg';
import Button from './Button';

type AppProps = {
    order: CartItemType[];
    onStartNewOrder: () => void;
};

export default function ConfirmedOrder({ order, onStartNewOrder }: AppProps) {
    const orderTotal = order.reduce((acc, cur) => acc + cur.price * cur.amount, 0);

    return (
        <div className="p-10 space-y-8 bg-white rounded-lg">
            <div className="space-y-2">
                <img className="mb-6" src={IconOrderConfirmed} alt="Order confirmed icon" />
                <h2 className="text-4xl font-bold">Order Confirmed</h2>
                <p className="text-rose-500">We hope you enjoy your food!</p>
            </div>
            <div className="p-6 bg-rose-50 rounded-lg">
                <ul>
                    {order.map(orderItem => (
                        <ConfirmedOrderItem key={orderItem.name} orderItem={orderItem} />
                    ))}
                </ul>
                <div className="flex justify-between items-center mt-6">
                    <span>Order Total</span>
                    <span className="text-2xl font-bold">${orderTotal.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <Button onClick={onStartNewOrder}>Start New Order</Button>
            </div>
        </div>
    );
}
