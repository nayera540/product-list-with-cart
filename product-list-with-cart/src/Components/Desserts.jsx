import desserts from '../../public/assets/data.json';
import Dessert from './Dessert';



function Desserts({dispatch, cart}) {
    return (
        <div className='dessert__container'>
            <h1>Desserts</h1>
            <div className='menu'>
                {desserts.map((dessert) => (
                    <Dessert dessert={dessert} key={dessert.name} dispatch={dispatch} cart={cart}/>
                ))}
            </div>
        </div>
    )
}

export default Desserts
