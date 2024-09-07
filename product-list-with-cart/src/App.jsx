import { useReducer } from "react";
import Cart from "./Components/Cart";
import Desserts from "./Components/Desserts";
import ConfirmOrder from "./Components/ConfirmOrder";

const initialState = {
    cart: [],
    quantity: 0,
    isOrderConfirmed: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "addToCart":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                quantity: state.quantity + 1,
            };
        case "increaseQuantity":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.name === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: (item.quantity + 1) * item.price,
                        }
                        : item
                ),
                quantity: state.quantity + 1,
            };
        case "decreaseQuantity":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.name === action.payload
                        ? {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 0,
                            totalPrice: (item.quantity - 1) * item.price,
                        }
                        : item
                ).filter(item => item.quantity > 0),
                quantity: state.quantity - 1,
            };
        case "removeItem":
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name),
                quantity: state.quantity - action.payload.quantity,
            };
        case "confirmOrder":
            return {
                ...state,
                isOrderConfirmed: true,
            };
        case "newOrder":
            return {
                ...initialState,
                quantity: 0,
                isOrderConfirmed: false,
            };
        default:
            throw new Error("Something went wrong");
    }
}

function App() {
    const [{ cart, quantity, isOrderConfirmed }, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <>
            <div className="app">
                <Desserts dispatch={dispatch} cart={cart} />
                <Cart dispatch={dispatch} quantity={quantity} cart={cart} />
            </div>
            {isOrderConfirmed && <ConfirmOrder dispatch={dispatch} cart={cart} />}
        </>
    );
}

export default App;
