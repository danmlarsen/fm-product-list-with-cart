import CartItem from './CartItem';
import EmptyCartIllustration from '../assets/images/illustration-empty-cart.svg';
import IconCarbonNeutral from '../assets/images/icon-carbon-neutral.svg';
import Button from './Button';

export interface CartItemType {
    name: string;
    image: string;
    price: number;
    amount: number;
}

type AppProps = {
    cartItems: CartItemType[];
    onRemoveItem: (name: string) => void;
    onConfirmOrder: () => void;
};

export default function Cart({ cartItems, onRemoveItem, onConfirmOrder }: AppProps) {
    const orderTotal = cartItems.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    const orderItemAmount = cartItems.reduce((acc, cur) => acc + cur.amount, 0);

    return (
        <div className="p-6 bg-white rounded-xl space-y-6 max-w-3xl w-full justify-self-center">
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
                            <CartItem key={cartItem.name} cartItem={cartItem} onRemoveItem={onRemoveItem} />
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
                        <Button onClick={onConfirmOrder}>Confirm Order</Button>
                    </div>
                </>
            )}
        </div>
    );
}
