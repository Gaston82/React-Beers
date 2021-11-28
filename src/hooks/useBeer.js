import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedBeer } from "../redux/actions/beerActions";
import { getBeerById } from "../services/getBeerById";

export default function useBeer(id) {
  const dispatch = useDispatch();
  const beer = useSelector((state) => state.beer);

  useEffect(() => {
    const fetchBeer = async () => {
      console.log(id);
      const result = await getBeerById(id);
      dispatch(selectedBeer(result));
    };
    fetchBeer(id);
  }, [id]);

  return beer;
}
