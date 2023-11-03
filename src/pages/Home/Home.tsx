import { useState, useEffect } from "react";
import { api } from "../../services";

import { Root } from "../../interfaces";
import { SectionLeft } from "../../components/SectionLeft";
import { MainContainer } from "./styles";

export function Home() {
  const [data, setData] = useState<Root>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MainContainer>
      <SectionLeft data={data} />
      <section>
        <p>Olá vetorea</p>
      </section>
    </MainContainer>
  );
}
