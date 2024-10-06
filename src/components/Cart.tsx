import CartItem from './CartItem';
import EmptyCartIllustration from '../assets/images/illustration-empty-cart.svg';
import IconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg';
import Button from './Button';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../context/CartContext';

export interface CartItemType {
    name: string;
    image: string;
    price: number;
    amount: number;
}

export default function Cart() {
    const { cartItems, handleConfirmOrder } = useContext(CartContext) as CartContextType;

    const orderTotal = cartItems.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    const orderItemAmount = cartItems.reduce((acc, cur) => acc + cur.amount, 0);

    return (
        <aside className="p-6 bg-white rounded-xl space-y-6 max-w-3xl w-full justify-self-center">
            <h2 className="text-2xl font-bold text-red">Your Cart ({orderItemAmount})</h2>

            {cartItems.length === 0 && (
                <div className="py-4 flex flex-col items-center gap-4">
                    <img src={EmptyCartIllustration} alt="Illustration of a cake" />
                    <p className="text-rose-500 text-sm font-semibold">Your added items will appear here</p>
                </div>
            )}
            {cartItems.length > 0 && (
                <>
                    <ul>
                        {cartItems.map(cartItem => (
                            <CartItem key={cartItem.name} cartItem={cartItem} />
                        ))}
                    </ul>
                    <div className="flex justify-between items-center">
                        <span>Order Total</span>
                        <span className="text-2xl font-bold">${orderTotal.toFixed(2)}</span>
                    </div>
                    <div className="p-4 flex justify-center items-center gap-2 bg-rose-50 rounded-lg">
                        <img src={IconCarbonNeutral} alt="Tree icon" />
                        <p>
                            This is a <strong>carbon-neutral</strong> delivery
                        </p>
                    </div>
                    <div>
                        <Button onClick={handleConfirmOrder}>Confirm Order</Button>
                    </div>
                </>
            )}
        </aside>
    );
}
