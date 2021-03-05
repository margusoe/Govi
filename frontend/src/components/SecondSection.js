import React from "react";
import {
  CardItem,
  Container,
  Icon,
  Image,
  LeftItem,
  LinkItem,
  MidCardItem,
  MiddleItem,
  RightItem,
  Span,
  Title,
} from "./SecondSection.style";

const SecondSection = () => {
  return (
    <Container>
      <LeftItem>
        <Image src="images/redcardigan.png" />
        <CardItem>
          <Span>Cardigans</Span>
          <LinkItem to="/cardigans">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </CardItem>
      </LeftItem>
      <MiddleItem>
        <Title>Women</Title>
        <Image src="images/graydress.png" />
        <MidCardItem>
          <Span>Dresses</Span>
          <LinkItem to="/dress">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </MidCardItem>
      </MiddleItem>
      <RightItem>
        <Image src="images/redcardigan.png" />
        <CardItem>
          <Span>Cardigans</Span>
          <LinkItem to="/cardigans">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </CardItem>
      </RightItem>
    </Container>
  );
};

export default SecondSection;
