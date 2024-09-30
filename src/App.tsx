import Desserts from './Desserts';
import Cart from './Cart';

import { CartItemType } from './Cart';

import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    function handleAddToCart(dessert: Dessert) {
        const newItem = {
            name: dessert.name,
            image: dessert.image.thumbnail,
            price: dessert.price,
            amount: 1,
        };

        setCartItems(prevState => {
            return [...prevState, newItem];
        });
    }

    function handleRemoveDessert(name: string) {
        setCartItems(prevState => prevState.filter(item => item.name !== name));
    }

    return (
        <div className="max-w-[1216px] mx-6 py-6 grid gap-8 lg:grid-cols-[1fr_384px] items-start text-rose-900 lg:mx-auto">
            <Desserts cartItems={cartItems} onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} onRemoveItem={handleRemoveDessert} />
        </div>
    );
}

export interface Dessert {
    name: string;
    category: string;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

export default App;
