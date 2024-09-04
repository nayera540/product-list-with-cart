import {useReducer} from "react";
import Cart from "./Components/Cart";
import Desserts from "./Components/Desserts";
import ConfirmOrder from "./Components/ConfirmOrder";


const initialState = {
    cart: [],
    isOrderConfirmed: false,
}


function reducer(state, action){

}

function App() {

    const [{cart, isOrderConfirmed}, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <div className="app">
                <Desserts />
                <Cart />
            </div>
            {isOrderConfirmed && <ConfirmOrder />}
        </>
    )
}

export default App
