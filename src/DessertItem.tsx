import { DessertType } from './Desserts';
import { CartItemType } from './Cart';
import AddToCartButton from './components/AddToCartButton';

type AppProps = {
    dessert: DessertType;
    cartItems: CartItemType[];
    onAddToCart: (dessert: DessertType) => void;
    onDecrement: (name: string) => void;
    onIncrement: (name: string) => void;
};

export default function DessertItem({ dessert, cartItems, onAddToCart, onDecrement, onIncrement }: AppProps) {
    const { name, category, price, image } = dessert;

    const cartAmount = cartItems.find(item => item.name === dessert.name)?.amount || 0;

    function handleDecrement() {
        onDecrement(name);
    }

    function handleIncrement() {
        onIncrement(name);
    }

    return (
        <li>
            <div className="relative mb-[38px]">
                <picture>
                    <source srcSet={image.desktop} media="(min-width: 1200px)" />
                    <source srcSet={image.tablet} media="(min-width: 600px)" />
                    <img className="object-cover w-full" src={image.mobile} alt="" />
                </picture>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <AddToCartButton onAdd={() => onAddToCart(dessert)} cartAmount={cartAmount} onDecrement={handleDecrement} onIncrement={handleIncrement} />
                </div>
            </div>
            <div>
                <p className="text-rose-500">{category}</p>
                <p className="font-semibold">{name}</p>
                <p className="text-red font-semibold">${price}</p>
            </div>
        </li>
    );
}
