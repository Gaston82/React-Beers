import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedBeer, removeSelectedBeer } from "../redux/actions/beerActions";
import { getBeerById } from "../services/getBeerById";

export default function useBeer(id) {
  const dispatch = useDispatch();
  const beer = useSelector((state) => state.beer);

  useEffect(() => {
    const fetchBeer = async () => {
      const result = await getBeerById(id);
      dispatch(selectedBeer(result));
    };
    if (id && id !== "") {
      fetchBeer(id);
    }

    return () => {
      dispatch(removeSelectedBeer());
    };
  }, [id, dispatch]);

  return beer;
}
