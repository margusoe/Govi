import React from "react";
import { infos } from "../infos";
import { cards } from "../cards";
import {
  CardWrapper,
  Container,
  ContributorsGroup,
  CopyRight,
  First,
  Fourth,
  Image,
  InnerContainer,
  InnerWrapper,
  Language,
  LeftContainer,
  OuterContainer,
  RightContainer,
  Second,
  SocialButtonGroup,
  Span,
  Third,
  Title,
} from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <InnerWrapper>
            {infos.map((info) => (
              <CardWrapper>
                <Title>{info.title}</Title>
                <First>{info.descriptions.first}</First>
                <Second>{info.descriptions.second}</Second>
                <Third>{info.descriptions.third}</Third>
                <Fourth>{info.descriptions.fourth}</Fourth>
              </CardWrapper>
            ))}
          </InnerWrapper>
          <ContributorsGroup>
            {cards.map((card) => (
              <Image src={card.image} />
            ))}
          </ContributorsGroup>
        </LeftContainer>
        <RightContainer>
          <Title>FOLLOW US</Title>
          <SocialButtonGroup>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="ri-instagram-line"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <i class="ri-youtube-fill"></i>
            </a>
          </SocialButtonGroup>
          <Language>
            <Span>Global-English</Span>
            <i className="fas fa-globe"></i>
          </Language>
        </RightContainer>
      </InnerContainer>
      <OuterContainer>
        <CopyRight>All content Copyright &copy; 2020 GOBI Cashmere</CopyRight>
      </OuterContainer>
    </Container>
  );
};

export default Footer;
