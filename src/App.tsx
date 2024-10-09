import { useContext } from 'react';

import { CartContext, CartContextType } from './context/CartContext';
import Desserts from './components/Desserts';
import Cart from './components/Cart';
import ConfirmedOrder from './components/ConfirmedOrder';
import Modal from './components/Modal';

function App() {
    const { orderConfirmed, cartItems, dispatch } = useContext(CartContext) as CartContextType;

    return (
        <>
            <div className="max-w-[1216px] my-6 md:my-10 lg:my-[88px] mx-6 grid gap-8 lg:grid-cols-[1fr_384px] items-start text-rose-900 lg:mx-auto">
                <Desserts />
                <Cart />
            </div>
            {orderConfirmed && (
                <Modal onBackdropClick={() => dispatch({ type: 'closeOrder' })}>
                    <ConfirmedOrder order={cartItems} onStartNewOrder={() => dispatch({ type: 'reset' })} />
                </Modal>
            )}
        </>
    );
}

export default App;
