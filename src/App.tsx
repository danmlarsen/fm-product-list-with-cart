import { useEffect, useState } from 'react';

import Desserts, { DessertType } from './Desserts';
import Cart, { CartItemType } from './Cart';
import ConfirmedOrder from './components/ConfirmedOrder';
import Modal from './components/Modal';

function App() {
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

        setCartItems(prevState => {
            return [...prevState, newItem];
        });
    }

    function handleRemoveFromCart(name: string) {
        setCartItems(prevState => prevState.filter(item => item.name !== name));
    }

    function handleIncrement(name: string) {
        setCartItems(prevState => prevState.map(item => (item.name === name ? { ...item, amount: item.amount++ } : item)));
    }

    function handleDecrement(name: string) {
        setCartItems(prevState => prevState.map(item => (item.name === name ? { ...item, amount: item.amount-- } : item)).filter(item => item.amount > 0));
    }

    function handleConfirmOrder() {
        setOrderConfirmed(true);
    }

    function handleReset() {
        setCartItems([]);
        setOrderConfirmed(false);
    }

    return (
        <>
            <div className="max-w-[1216px] mx-6 py-6 grid gap-8 lg:grid-cols-[1fr_384px] items-start text-rose-900 lg:mx-auto">
                <Desserts cartItems={cartItems} onAddToCart={handleAddToCart} onDecrement={handleDecrement} onIncrement={handleIncrement} />
                <Cart cartItems={cartItems} onRemoveItem={handleRemoveFromCart} onConfirmOrder={handleConfirmOrder} />
            </div>
            {orderConfirmed && (
                <Modal onBackdropClick={() => setOrderConfirmed(false)}>
                    <ConfirmedOrder order={cartItems} onStartNewOrder={handleReset} />
                </Modal>
            )}
        </>
    );
}

export default App;
