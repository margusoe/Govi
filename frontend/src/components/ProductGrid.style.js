import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const Title = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  color: #4f5255;
  padding: 40px 0;
  cursor: default;
`;

export const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img``;
export const Name = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #212121;
`;
export const Colors = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 1px;
  color: #212121;
  cursor: default;
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;
export const OffPrice = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 1px;
  text-decoration-line: line-through;
  color: #212121;
  cursor: default;
`;
export const Price = styled.span`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 1px;
  color: #b00020;
  padding-left: 5px;
  cursor: default;
`;

export const LinkProduct = styled(Link)`
  text-decoration: none;
  padding: 10px 0 0;
`;
