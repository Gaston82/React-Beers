import { useState, useEffect } from "react";
import { getBeerById } from "../services/getBeerById";

export default function useBeer(id) {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      console.log(id);
      const result = await getBeerById(id);
      console.log(result);
      setBeer(result);
    };
    fetchBeer(id);
  }, [id]);

  return beer;
}
