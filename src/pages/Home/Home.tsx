import { useState, useEffect } from "react";
import { api } from "../../services";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return <h1>Olá mundo!!</h1>;
}
