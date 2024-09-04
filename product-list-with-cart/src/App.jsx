import {useReducer} from "react";
import Cart from "./Components/Cart";
import Desserts from "./Components/Desserts";
import ConfirmOrder from "./Components/ConfirmOrder";


const initialState = {
    cart: [],
    quantity: 0,
    isOrderConfirmed: false,
}


function reducer(state, action){
    switch(action.type){
        case "addToCart":
            return{
                ...state,
                cart: [...state.cart, action.payload],
                quantity: state.quantity + 1,
            };
        default:
            throw new Error("Something went wrong");
    }
}

function App() {

    const [{cart, quantity,isOrderConfirmed}, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <div className="app">
                <Desserts dispatch={dispatch} cart={cart}/>
                <Cart />
            </div>
            {isOrderConfirmed && <ConfirmOrder />}
        </>
    )
}

export default App
