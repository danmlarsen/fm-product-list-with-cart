import { Dessert } from './App';
import { CartItemType } from './Cart';
import AddToCartButton from './components/AddToCartButton';

type AppProps = {
    dessert: Dessert;
    cartItems: CartItemType[];
    onAddToCart: (dessert: Dessert) => void;
};

export default function DessertItem({ dessert, cartItems, onAddToCart }: AppProps) {
    const { name, category, price, image } = dessert;

    const cartAmount = cartItems.find(item => item.name === dessert.name)?.amount || 0;

    return (
        <li>
            <div className="relative mb-[38px]">
                <img src={image.mobile} alt="" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <AddToCartButton onAdd={() => onAddToCart(dessert)} cartAmount={cartAmount} />
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
