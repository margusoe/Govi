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
} from "./ThirdSection.style";

const ThirdSection = () => {
  return (
    <Container>
      <LeftItem>
        <Image src="images/turtleneck.png" />
        <CardItem>
          <Span>Turtleneck</Span>
          <LinkItem to="/turtleneck">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </CardItem>
      </LeftItem>
      <MiddleItem>
        <Title>Men</Title>
        <Image src="images/polo.png" />
        <MidCardItem>
          <Span>POLO</Span>
          <LinkItem to="/polo">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </MidCardItem>
      </MiddleItem>
      <RightItem>
        <Image src="images/turtleneck.png" />
        <CardItem>
          <Span>Turtleneck</Span>
          <LinkItem to="/turtleneck">
            <Icon src="images/arrow.svg" />
          </LinkItem>
        </CardItem>
      </RightItem>
    </Container>
  );
};

export default ThirdSection;
