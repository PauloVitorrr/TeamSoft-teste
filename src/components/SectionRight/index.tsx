import { Root } from "../../interfaces";

import negativo from "../../assets/imgs/negativo.svg";
import add from "../../assets/imgs/Add.svg";

import {
  ContainerAddTalher,
  ContainerButtonAdd,
  ContainerIngredients,
  ContainerTalher,
  IngredientsPrice,
  SectionRightContainer,
} from "./styles";

interface DataProps {
  data: Root;
}

export function SectionRight({ data }: DataProps) {
  console.log(data);

  return (
    <SectionRightContainer>
      <ContainerIngredients>
        <h4>Adicionar Ingredientes</h4>
        <span>Até 8 ingredientes.</span>
      </ContainerIngredients>

      {data[0]?.ingredients?.map((group) => {
        if (group.group === "Ingredientes Extras") {
          return group.itens.map((item, index) => (
            <IngredientsPrice key={index}>
              <div>
                <h5>{item.nm_item}</h5>
                <span>R${item.vl_item}</span>
              </div>
              <ContainerButtonAdd>
                <button>
                  <img src={negativo} />
                </button>
                <p>0</p>
                <button>
                  <img src={add} />
                </button>
              </ContainerButtonAdd>
            </IngredientsPrice>
          ));
        }
      })}
      <ContainerTalher>
        <h5>Precisa de talher?</h5>
      </ContainerTalher>
      <ContainerAddTalher>
        <div>
          <button>
            <img src={negativo} />
          </button>
          <p>1</p>
          <button>
            <img src={add} />
          </button>
        </div>
        <button>Adicionar</button>
      </ContainerAddTalher>
    </SectionRightContainer>
  );
}
