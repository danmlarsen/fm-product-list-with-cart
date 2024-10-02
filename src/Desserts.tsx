import desserts from './data.json';

import DessertItem from './DessertItem';

import { CartItemType } from './Cart';

export interface DessertType {
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

type AppProps = {
    cartItems: CartItemType[];
    onAddToCart: (dessert: DessertType) => void;
    onDecrement: (name: string) => void;
    onIncrement: (name: string) => void;
};

export default function Desserts({ cartItems, onAddToCart, onDecrement, onIncrement }: AppProps) {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold">Desserts</h1>
            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {desserts.map(dessert => (
                    <DessertItem key={dessert.name} dessert={dessert} cartItems={cartItems} onAddToCart={onAddToCart} onDecrement={onDecrement} onIncrement={onIncrement} />
                ))}
            </ul>
        </div>
    );
}
