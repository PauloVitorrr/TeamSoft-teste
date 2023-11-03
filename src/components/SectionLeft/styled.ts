import styled from "styled-components";

export const SectionLeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 597px;

  img {
    width: 100%;
  }
  h2 {
    color: ${(props) => props.theme["gray-500"]};
    padding: 30px 0;
    font-size: 28px;
  }
  p {
    width: 100%;
    font-size: 20px;
    color: ${(props) => props.theme["gray-500"]};
    font-weight: 400;
    padding-bottom: 8px;
    margin-bottom: 10px;
  }
`;

export const SpanPriceLeft = styled.span`
  color: ${(props) => props.theme["orange-400"]};
  font-size: 32px;
  font-weight: 400;
  margin-right: 17px;
`;

export const SpanPriceRight = styled.span`
  color: ${(props) => props.theme["gray-500"]};
  font-size: 32px;
  text-decoration: line-through;
`;
