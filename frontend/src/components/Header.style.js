import styled from "styled-components";
import { Link } from "react-router-dom";
import Select from "react-select";

export const Container = styled.div`
  background-color: #39406d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 88px;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  padding-left: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 20px;
  color: #fff;
  padding-right: 15px;
`;

export const Span = styled.span`
  font-family: Roboto;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionTag = styled.span`
  padding-right: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;
export const LinkTag = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const SignIn = styled.span`
  font-family: Roboto;
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
  padding-right: 20px;
`;

export const SignUp = styled.span`
  font-family: Roboto;
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 750px;
  background-image: url("images/banner.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const LContainer = styled.div`
  display: flex;
  padding-left: 40px;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

export const MidContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 48%;
`;

export const RContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  width: 33%;
`;

export const CategorySpan = styled.a`
  font-family: Roboto;
  font-weight: 300;
  font-size: 15px;
  text-transform: uppercase;
  width: 100%;
  color: #ffffff;
  padding-bottom: 10px;
`;

export const LinkCategory = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  text-decoration: none;

  &:hover,
  &:active {
    border-bottom: 2px solid #f68a90;
  }

  &::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: white;
    display: block;
    transition: width 0.5s;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: auto;
  top: 62.04px;
`;

export const MottoLogo = styled.img`
  position: absolute;
  left: auto;
  top: 98.13px;
`;

export const Search = styled(Select)`
  width: 300px;
  padding-left: 10px;
  font-size: 15px;
`;

export const SearchIcon = styled.i`
  font-size: 20px;
  font-weight: 300;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  position: absolute;
  right: 5%;
  top: 35%;
  text-align: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 54px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000000;
  margin-top: 40px;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
