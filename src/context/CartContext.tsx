import { createContext, useEffect, useReducer } from 'react';
import { CartItemType } from '../components/Cart';

export type CartContextType = {
    cartItems: CartItemType[];
    orderConfirmed: boolean;
    dispatch: (action: CartAction) => void;
};

interface CartState {
    cartItems: CartItemType[];
    orderConfirmed: boolean;
}

interface CartAction {
    type: string;
    payload?: string | CartItemType;
}

const initialState: CartState = {
    cartItems: [],
    orderConfirmed: false,
};

function initializer(initialState: CartState): CartState {
    const storedValue = localStorage.getItem('cartItems');

    return {
        ...initialState,
        cartItems: storedValue ? JSON.parse(storedValue) : [],
    };
}

function reducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'cart/addItem':
            return { ...state, cartItems: [...state.cartItems, action.payload as CartItemType] };
        case 'cart/removeItem':
            return { ...state, cartItems: state.cartItems.filter(item => item.name !== action.payload) };
        case 'cart/incrementItem':
            return { ...state, cartItems: state.cartItems.map(item => (item.name === action.payload ? { ...item, amount: item.amount + 1 } : item)) };
        case 'cart/decrementItem':
            return { ...state, cartItems: state.cartItems.map(item => (item.name === action.payload ? { ...item, amount: item.amount - 1 } : item)).filter(item => item.amount > 0) };
        case 'confirmOrder':
            return { ...state, orderConfirmed: true };
        case 'closeOrder':
            return { ...state, orderConfirmed: false };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [{ cartItems, orderConfirmed }, dispatch] = useReducer(reducer, initialState, initializer);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                orderConfirmed,
                dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
