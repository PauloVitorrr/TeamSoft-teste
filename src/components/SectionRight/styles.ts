import styled from "styled-components";

export const SectionRightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  padding: 32px;
`;

export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 375px;
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
