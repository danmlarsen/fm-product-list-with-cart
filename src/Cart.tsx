import CartItem from './assets/CartItem';
import EmptyCartIllustration from './assets/images/illustration-empty-cart.svg';

export interface CartItemType {
    name: string;
    image: string;
    price: number;
    amount: number;
}

type AppProps = {
    cartItems: CartItemType[];
    onRemoveItem: (name: string) => void;
};

export default function Cart({ cartItems, onRemoveItem }: AppProps) {
    return (
        <div className="p-6 bg-white rounded-xl space-y-6">
            <h2 className="text-2xl font-bold text-red">Your Cart ({cartItems.length})</h2>

            {cartItems.length === 0 && (
                <div className="py-4 flex flex-col items-center gap-6">
                    <img src={EmptyCartIllustration} alt="" />
                    <p className="text-rose-500">Your added items will appear here</p>
                </div>
            )}
            {cartItems.length > 0 && (
                <ul>
                    {cartItems.map(cartItem => (
                        <CartItem key={cartItem.name} cartItem={cartItem} onRemoveItem={onRemoveItem} />
                    ))}
                </ul>
            )}
        </div>
    );
}
