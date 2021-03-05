import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Description,
  Form,
  Input,
  Subdescription,
  Title,
} from "./Subscribe.style";

const Subscribe = () => {
  return (
    <Container>
      <Title>Subscribe</Title>
      <Description>
        Sign up for emails and receive early access to new arrivals, sales,
        events + more.
      </Description>

      <Form
        action="mailto:someone@example.com"
        method="post"
        enctype="text/plain"
      >
        <Input type="text" name="mail" placeholder="Enter your email address" />
        <Button type="submit" value="Send">
          Submit
        </Button>
      </Form>
      <Subdescription>
        By signing up, you will receive Gobi Cashmere offers, promotions and
        other commercial messages. You are also agreeing to Gobi Cashmere's
        <Link to="/privacy_policy">Privacy Policy</Link>. You may unsubscribe at
        any time.
      </Subdescription>
    </Container>
  );
};

export default Subscribe;
