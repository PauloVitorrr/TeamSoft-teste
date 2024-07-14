import { useState, useEffect } from "react";
import { api } from "../../services";

import { Root } from "../../interfaces";
import { SectionLeft } from "../../components/SectionLeft";
import { SectionRight } from "../../components/SectionRight";

import * as S from "./styles";

import loadingGif from "../../assets/imgs/Loading_2.gif";

export function Home() {
  const [data, setData] = useState<Root>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return loading ? (
    <S.ContainerGif>
      <img src={loadingGif} alt="Loading gif" />
    </S.ContainerGif>
  ) : (
    <S.MainContainer>
      <SectionLeft data={data} />
      <SectionRight data={data} />
    </S.MainContainer>
  );
}
