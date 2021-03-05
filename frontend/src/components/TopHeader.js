import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Icon,
  LeftContainer,
  LinkTag,
  MiddleContainer,
  QuestionTag,
  RightContainer,
  SignIn,
  SignUp,
  Span,
} from "./Header.style";

const TopHeader = () => {
  return (
    <Container>
      <LeftContainer>
        <Icon className="fas fa-globe"></Icon>
        <Span>Global-English</Span>
      </LeftContainer>
      <MiddleContainer>
        <QuestionTag>RETURNING AN ORDER?</QuestionTag>
        <LinkTag to="/order">Click for more info</LinkTag>
      </MiddleContainer>
      <RightContainer>
        <Link to="/signin">
          <SignIn>SIGN IN</SignIn>
        </Link>
        <Link to="/signup">
          <SignUp>SIGN UP</SignUp>
        </Link>
      </RightContainer>
    </Container>
  );
};

export default TopHeader;
