import burguii from "../../assets/imgs/burguii.svg";
import { Root } from "../../interfaces";
import { SectionLeftContainer, SpanPriceLeft, SpanPriceRight } from "./styled";

interface DataProps {
  data: Root;
}

export function SectionLeft({ data }: DataProps) {
  return (
    <SectionLeftContainer>
      <img src={burguii} />
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.nm_product}</h2>
          <p>{item.description}</p>
          <SpanPriceLeft>R${item.vl_discount}</SpanPriceLeft>
          <SpanPriceRight>R${item.vl_price}</SpanPriceRight>
        </div>
      ))}
    </SectionLeftContainer>
  );
}
