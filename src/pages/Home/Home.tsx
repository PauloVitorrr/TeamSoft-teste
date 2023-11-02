import { useState, useEffect } from "react";
import { api } from "../../services";

import { Root } from "../../interfaces";

import burguii from "../../assets/imgs/burguii.svg";

export function Home() {
  const [data, setData] = useState<Root>([]);

  console.log();

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <section>
        <img src={burguii} />
        <h2>{data[0].nm_product}</h2>
        <p>{data[0].description}</p>
        <span>{data[0].vl_discount}</span> <br />
        <span>{data[0].vl_price}</span>
      </section>
      <section>
        <p>Olá vetorea</p>
      </section>
    </main>
  );
}
