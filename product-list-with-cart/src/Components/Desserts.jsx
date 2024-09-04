import desserts from '../../public/assets/data.json';
import Dessert from './Dessert';

console.log(desserts);


function Desserts() {
    return (
        <div className='dessert__container'>
            <h1>Desserts</h1>
            <div className='menu'>
                {desserts.map((dessert) => (
                    <Dessert dessert={dessert} key={dessert.name}/>
                ))}
            </div>
        </div>
    )
}

export default Desserts
