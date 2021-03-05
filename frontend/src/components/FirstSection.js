import React from "react";
import {
  BigImage,
  BottomInnerWrapper,
  Button,
  Description,
  FirstImageContainer,
  InnerWrapper,
  LeftContainer,
  MainContainer,
  RightContainer,
  SecondImageContainer,
  SmallImage,
  Span,
  Title,
} from "./FirstSection.style";

const FirstSection = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Title>WINTER SPICE 2020</Title>
        <Description>
          Infusion of summer pieces and cashmere silk blends.
        </Description>
        <Button>shop now</Button>
      </LeftContainer>
      <RightContainer>
        <InnerWrapper>
          <FirstImageContainer>
            <BigImage src="images/bigimage.png" />
          </FirstImageContainer>
          <SecondImageContainer>
            <SmallImage src="images/smallfirstimage.png" />
            <SmallImage src="images/smallsecondimage.png" />
          </SecondImageContainer>
        </InnerWrapper>
        <BottomInnerWrapper>
          <Span>Infusion of summer pieces and cashmere silk blends.</Span>
        </BottomInnerWrapper>
      </RightContainer>
    </MainContainer>
  );
};

export default FirstSection;
