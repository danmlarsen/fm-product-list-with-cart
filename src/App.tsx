import Desserts from './Desserts';
import Cart from './Cart';

import { CartItem } from './Cart';

import { useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function handleAddDessert(dessert: Dessert) {
        console.log(dessert);

        setCartItems(prevState => {
            return [
                ...prevState,
                {
                    name: dessert.name,
                    image: dessert.image.thumbnail,
                    price: dessert.price,
                    amount: 1,
                },
            ];
        });
    }

    return (
        <div className="mx-6 py-6 grid gap-8 lg:grid-cols-2 items-start text-rose-900">
            <Desserts onAddDessert={handleAddDessert} />
            <Cart cartItems={cartItems} />
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
