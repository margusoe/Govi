import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 60%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 80px 50px 0 50px;
  background: #f5f7f6;
`;

export const Title = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 34px;
  line-height: 36px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1f1f1f;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  cursor: default;
`;

export const Description = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #353535;
  padding: 20px 0 40px;
  cursor: default;
`;

export const Button = styled.button`
  width: 170px;
  height: 56px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #272727;
  border-radius: 10px;
  border: none;
  &:hover,
  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0;
`;
