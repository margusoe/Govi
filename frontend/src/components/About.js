import React from "react";
import {
  Button,
  Container,
  Description,
  Image,
  LeftContainer,
  RightContainer,
  Title,
} from "./About.style";

const About = () => {
  return (
    <Container>
      <LeftContainer>
        <Image src="images/mainbackground.png" />
      </LeftContainer>

      <RightContainer>
        <Title>About us</Title>
        <Description>
          Aute et officia anim consectetur consequat velit minim irure Lorem ad.
          Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit
          occaecat cillum anim ad magna aliqua. Sint enim Lorem amet in tempor
          non ea duis cillum. Cillum consectetur in in aliqua. Nostrud minim
          duis cupidatat et ea sint.
        </Description>
        <Button>Read More</Button>
      </RightContainer>
    </Container>
  );
};

export default About;
