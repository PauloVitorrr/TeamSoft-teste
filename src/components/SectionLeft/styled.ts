import styled from "styled-components";

export const SectionLeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 439px;

  img {
    width: 100%;
  }

  h2 {
    color: ${(props) => props.theme["gray-500"]};
    padding: 30px 0;
    font-size: 28px;
    @media screen and (max-width: 445px) {
      font-size: 18px;
      padding: 16px;
    }
  }
  p {
    width: 100%;
    font-size: 20px;
    color: ${(props) => props.theme["gray-500"]};
    font-weight: 400;
    padding-bottom: 8px;
    margin-bottom: 10px;

    @media screen and (max-width: 445px) {
      font-size: 16px;
      padding: 16px;
    }
  }
`;

export const SpanPriceLeft = styled.span`
  color: ${(props) => props.theme["orange-400"]};
  font-size: 32px;
  font-weight: 400;
  margin-right: 17px;
  @media screen and (max-width: 445px) {
    font-size: 14px;
    padding: 16px;
  }
`;

export const SpanPriceRight = styled.span`
  color: ${(props) => props.theme["gray-500"]};
  font-size: 32px;
  text-decoration: line-through;
  @media screen and (max-width: 445px) {
    font-size: 14px;
  }
`;
