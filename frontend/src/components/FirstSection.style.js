import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 46px;
  line-height: 60.72px;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 20px;
  cursor: default;
`;

export const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 30.4px;
  color: #636363;
  padding-bottom: 40px;
  width: 420px;
  cursor: default;
`;

export const Button = styled.button`
  width: 200px;
  height: 56px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000;
  border: none;
  border-radius: 10px;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const FirstImageContainer = styled.div`
  margin-right: 5px;
`;

export const SecondImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BigImage = styled.img`
  margin-bottom: -5px;
`;

export const SmallImage = styled.img``;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomInnerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #585858;
  cursor: default;
`;
