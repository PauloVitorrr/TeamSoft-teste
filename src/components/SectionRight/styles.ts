import styled from "styled-components";

export const SectionRightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  padding: 32px;

  @media screen and (max-width: 445px) {
    border: none;
    padding: 16px;
  }
`;

export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  background-color: rgba(253, 215, 14, 0.2);
  padding: 8px 16px;

  h4 {
    font-size: 14px;
    font-weight: 400px;
  }
  span {
    color: ${(props) => props.theme["orange-500"]};
    font-size: 12px;
  }
`;

export const IngredientsPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 16px;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme["orange-200"]};

  :nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 40px;

    h5 {
      font-size: 14px;
      color: ${(props) => props.theme["gray-500"]};
    }

    span {
      color: ${(props) => props.theme["orange-200"]};
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const ContainerButtonAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border: 1px solid ${(props) => props.theme["orange-200"]};
  border-radius: 5px;

  button {
    border: none;
    background-color: ${(props) => props.theme["white"]};
  }
`;

export const ContainerTalher = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 4px;
  width: 100%;
  background-color: rgba(253, 215, 14, 0.2);
  padding: 8px 16px;
  margin-top: 9px;

  h5 {
    font-size: 14px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const ContentOptionTalher = styled.div`
  display: flex;
  gap: 8px;

  & > span {
    font-size: 14px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const ContainerAddTalher = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  @media screen and (max-width: 445px) {
    margin-top: 48px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme["orange-200"]};
    border-radius: 5px;
    width: 140px;
    height: 40px;

    button {
      border: none;
      background-color: transparent;
    }
  }

  button {
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["orange-200"]};
    border-radius: 4px;
    border: none;
    width: 219px;
    height: 40px;

    @media screen and (max-width: 445px) {
      width: 195px;
    }
  }
`;
