import { Root } from "../../interfaces";

import negativo from "../../assets/imgs/negativo.svg";
import add from "../../assets/imgs/Add.svg";

import * as S from "./styles";

interface DataProps {
  data: Root;
}

export function SectionRight({ data }: DataProps) {
  console.log(data);

  return (
    <S.SectionRightContainer>
      <S.ContainerIngredients>
        <h4>Adicionar Ingredientes</h4>
        <span>Até 8 ingredientes.</span>
      </S.ContainerIngredients>

      {data[0]?.ingredients?.map((group) => {
        if (group.group === "Ingredientes Extras") {
          return group.itens.map((item, index) => (
            <S.IngredientsPrice key={index}>
              <div>
                <h5>{item.nm_item}</h5>
                <span>R${item.vl_item}</span>
              </div>
              <S.ContainerButtonAdd>
                <button>
                  <img src={negativo} />
                </button>
                <p>0</p>
                <button>
                  <img src={add} />
                </button>
              </S.ContainerButtonAdd>
            </S.IngredientsPrice>
          ));
        }
      })}
      <S.ContainerTalher>
        <h5>Precisa de talher?</h5>
        <S.ContentOptionTalher>
          <input type="radio" />
          <span>sim</span>
        </S.ContentOptionTalher>
        <S.ContentOptionTalher>
          <input type="radio" />
          <span>não</span>
        </S.ContentOptionTalher>
      </S.ContainerTalher>
      <S.ContainerAddTalher>
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
      </S.ContainerAddTalher>
    </S.SectionRightContainer>
  );
}
