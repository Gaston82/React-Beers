import {fetchBeers} from '../services/fetchBeers'
import useBeers from '../hooks/useBeers'
import BeerItem from './beerItem'
import '../styles/listOfBeers.css';
export default function ListOfBeers(){

const listOfBeers = useBeers();

console.log(listOfBeers)
    
    return (
        <section className="grid-container">
        {listOfBeers.map((beer)=>(
          <BeerItem key={beer.id} name={beer.name} image={beer.image_url}abv={beer.abv}/>
        ))}
        </section>
    )
    

}