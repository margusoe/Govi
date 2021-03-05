import React from "react";
import BottomHeader from "./BottomHeader";
import { Button, HeaderContainer, TextContainer } from "./Header.style";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <TopHeader />
      <BottomHeader />
      <TextContainer>
        <img src="images/summersale.svg" alt="summersale" />
        <img src="images/off.svg" alt="off" />
        <Button>Shop Now</Button>
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
