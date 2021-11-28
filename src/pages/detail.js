import { useParams } from "react-router";
import useBeer from "../hooks/useBeer";
import Header from "../components/header";

export default function Detail() {
  let { id } = useParams();
  const beer = useBeer(id);
  console.log(beer);

  if (!beer) {
    return <h1>Loading...</h1>;
  }
  const { tagline, name, image_url, food_pairing } = beer;

  return (
    <>
      <Header />
      <img className="card__image" src={image_url} alt={name} />
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      {food_pairing?.map((food) => (
        <p>{food}</p>
      ))}
    </>
  );
}
