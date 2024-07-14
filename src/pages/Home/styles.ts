import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1148px;
  margin: 0 auto;
  padding-top: 48px;
  gap: 112px;
  @media screen and (max-width: 445px) {
    padding: 16px;
    gap: 32px;
  }
`;

export const ContainerGif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
