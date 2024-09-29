import EmptyCartIllustration from './assets/images/illustration-empty-cart.svg';

export interface CartItem {
    name: string;
    image: string;
    price: number;
    amount: number;
}

type AppProps = {
    cartItems: CartItem[];
};

export default function Cart({ cartItems }: AppProps) {
    return (
        <div className="p-6 bg-white rounded-xl space-y-6">
            <h2 className="text-2xl font-bold text-red">Your Cart ({cartItems.length})</h2>
            <div className="py-4 flex flex-col gap-6 items-center">
                {cartItems.length === 0 && (
                    <>
                        <img src={EmptyCartIllustration} alt="" />
                        <p className="text-rose-500">Your added items will appear here</p>
                    </>
                )}
                {cartItems.length > 0 && (
                    <>
                        <ul>
                            {cartItems.map(cartItem => (
                                <li key={cartItem.name}>{cartItem.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

// type AppProps2 = {
//     item: Dessert;
// };

// function CartItem({ item }: AppProps2) {
//     const {name, }

//     return <li key={cartItem.name}>{cartItem.name}</li>
// }
