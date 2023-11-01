import { ContainerSelect, HeaderContainer, InputDelivery } from "./styles";
import Deliverize from "../../assets/Deliverize.svg";
import account from "../../assets/account_circle_24px.svg";
import cart from "../../assets/shopping_cart_24px.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Deliverize} alt="logo deliverize" />
      <nav>
        <ContainerSelect>
          <p>Entrega:</p>
          <select>
            <option>R. Antonio Braune, 222</option>
          </select>
        </ContainerSelect>
        <InputDelivery placeholder="Busque por estabelecimento ou produtos" />
        <div>
          <img src={account} />
          <p>Entrar</p>
        </div>
        <div>
          <img src={cart} />
          <p>Carrinho</p>
        </div>
      </nav>
    </HeaderContainer>
  );
}
