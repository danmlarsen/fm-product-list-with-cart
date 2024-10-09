import { useContext } from 'react';
import { CartContext, CartContextType } from '../context/CartContext';
import { DessertType } from './Desserts';
import AddToCartButton from './AddToCartButton';

type AppProps = {
    dessert: DessertType;
    // cartItems: CartItemType[];
    // onAddToCart: (dessert: DessertType) => void;
    // onDecrement: (name: string) => void;
    // onIncrement: (name: string) => void;
};

export default function DessertItem({ dessert }: AppProps) {
    const { cartItems, dispatch } = useContext(CartContext) as CartContextType;

    const { name, category, price, image } = dessert;

    const cartAmount = cartItems.find(item => item.name === name)?.amount || 0;

    function handleAddToCart() {
        const newItem = {
            name: name,
            image: image.thumbnail,
            price: price,
            amount: 1,
        };

        dispatch({ type: 'cart/addItem', payload: newItem });
    }

    return (
        <li>
            <article>
                <div className="relative mb-[38px]">
                    <div className={`rounded-lg overflow-hidden transition duration-500 border-2 ${cartAmount > 0 ? 'border-red' : 'border-transparent'}`}>
                        <picture>
                            <source srcSet={image.desktop} media="(min-width: 1260px)" />
                            <source srcSet={image.tablet} media="(min-width: 600px)" />
                            <img className="object-cover w-full h-[212px] lg:h-[240px]" src={image.mobile} alt={`Image of ${name}`} />
                        </picture>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <AddToCartButton
                            onAdd={handleAddToCart}
                            cartAmount={cartAmount}
                            onDecrement={() => dispatch({ type: 'cart/decrementItem', payload: name })}
                            onIncrement={() => dispatch({ type: 'cart/incrementItem', payload: name })}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-rose-500 text-sm leading-[1.325]">{category}</p>
                    <h2 className="font-semibold leading-[1.325]">{name}</h2>
                    <p className="text-red font-semibold leading-[1.325]">${price.toFixed(2)}</p>
                </div>
            </article>
        </li>
    );
}
