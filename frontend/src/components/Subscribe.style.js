import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
`;

export const Title = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 1px;
  color: #4f5255;
  cursor: default;
`;

export const Description = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #4f5255;
  padding-bottom: 36px;
  cursor: default;
`;

export const Form = styled.form``;

export const Input = styled.input`
  background: #f5f7f6;
  border-radius: 10px;
  width: 610px;
  height: 48px;
  border: none;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #272727;
  border-radius: 10px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 158px;
  height: 48px;
  margin-left: -158px;
  border: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const Subdescription = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.5px;
  color: #4f5255;
  width: 592px;
  padding-top: 10px;
  cursor: default;
  a {
    color: #333;
    font-weight: 700;
    padding: 0 0 0 5px;
  }
`;
