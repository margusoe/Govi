import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 100px 10px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
`;

export const LeftItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MiddleItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const RightItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 120px;
  margin-top: -100px;
  align-items: center;
`;

export const MidCardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -100px;
  padding: 30px;
  align-items: center;
`;

export const Image = styled.img`
  height: 600px;
  padding: 5px;
  object-fit: fill;
`;

export const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  cursor: default;
`;

export const Title = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 50px;
  line-height: 60px;
  text-transform: uppercase;
  color: #000000;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  padding: 30px 0;
  cursor: default;
`;

export const Icon = styled.img`
  width: 42px;
  height: 26px;
  color: #fff;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;
