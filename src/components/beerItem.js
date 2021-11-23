import '../styles/beerItem.css';

export default function BeerItem({id,name,image,abv}){
return(
    <article className="card">
            <img className="card__image" src={image} alt={name} />
            <h3>{name}</h3>
            <p>{abv}º</p>
    </article>
)

}