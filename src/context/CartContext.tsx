import { createContext, useEffect, useState } from 'react';
import { CartItemType } from '../components/Cart';
import { DessertType } from '../components/Desserts';

export type CartContextType = {
    cartItems: CartItemType[];
    orderConfirmed: boolean;
    setOrderConfirmed: (value: boolean) => void;
    handleAddToCart: (dessert: DessertType) => void;
    handleRemoveFromCart: (name: string) => void;
    handleIncrement: (name: string) => void;
    handleDecrement: (name: string) => void;
    handleConfirmOrder: () => void;
    handleReset: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
        const storedValue = localStorage.getItem('cartItems');
        return storedValue ? JSON.parse(storedValue) : [];
    });
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    function handleAddToCart(dessert: DessertType) {
        const newItem = {
            name: dessert.name,
            image: dessert.image.thumbnail,
            price: dessert.price,
            amount: 1,
        };

        setCartItems(prevState => [...prevState, newItem]);
    }

    function handleRemoveFromCart(name: string) {
        setCartItems(prevState => prevState.filter(item => item.name !== name));
    }

    function handleIncrement(name: string) {
        setCartItems(prevState => prevState.map(item => (item.name === name ? { ...item, amount: item.amount + 1 } : item)));
    }

    function handleDecrement(name: string) {
        setCartItems(prevState => prevState.map(item => (item.name === name ? { ...item, amount: item.amount - 1 } : item)).filter(item => item.amount > 0));
    }

    function handleConfirmOrder() {
        setOrderConfirmed(true);
    }

    function handleReset() {
        setCartItems([]);
        setOrderConfirmed(false);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                orderConfirmed,
                setOrderConfirmed,
                handleAddToCart,
                handleRemoveFromCart,
                handleIncrement,
                handleDecrement,
                handleConfirmOrder,
                handleReset,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
