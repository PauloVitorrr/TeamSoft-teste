import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 16px 40px;
  background-color: ${(props) => props.theme["gray-100"]};

  nav {
    display: flex;
    gap: 24px;

    div {
      display: flex;
      align-items: center;
      gap: 4px;

      p {
        color: ${(props) => props.theme["red-200"]};
        font-family: Roboto;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
`;

export const ContainerSelect = styled.div`
  select {
    width: 230px;
    height: 48px;

    option {
      font-weight: bold;
      font-size: 12px;
    }
  }
  p {
    position: relative;
    top: -15px;
    left: 56px;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const InputDelivery = styled.input`
  width: 340px;
  height: 48px;
  padding: 16px 16px;
  border: 1px solid ${(props) => props.theme["red-200"]};
  border-radius: 4px;
`;
