import React from "react";
import { Link } from "react-router-dom";
import {
  BottomContainer,
  LContainer,
  MidContainer,
  RContainer,
  CategorySpan,
  LinkCategory,
  Logo,
  MottoLogo,
  Search,
  SearchIcon,
  Icons,
} from "./Header.style";
const categories = [
  {
    name: "women",
  },
  {
    name: "men",
  },
  {
    name: "home",
  },
  {
    name: "accessories",
  },
  {
    name: "organic",
  },
];

const options = [
  { value: "Sweater", label: "Sweater" },
  { value: "Basic", label: "Basic" },
  { value: "Cardigans", label: "Cardigans" },
  { value: "Hoodies", label: "Hoodies" },
  { value: "Crew Necks", label: "Crew Necks" },
  { value: "Turtle Necks", label: "Turtle Necks" },
  { value: "V Necks", label: "V Necks" },
  { value: "Vests & Tops", label: "Vests & Tops" },
];

const BottomHeader = () => {
  return (
    <BottomContainer>
      <LContainer>
        {categories.map((category) => (
          <LinkCategory to={`/${category.name}`}>
            <CategorySpan>{category.name}</CategorySpan>
          </LinkCategory>
        ))}
      </LContainer>
      <MidContainer>
        <Link to="/">
          <Logo src="images/GOBI.png" />
          <MottoLogo src="images/cashmereforall.png" />
        </Link>
      </MidContainer>
      <RContainer>
        <SearchIcon className="ri-search-line">
          <Search
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Search"
          />
        </SearchIcon>

        <Link to="/wishlist">
          <Icons src="images/heart.svg" />
        </Link>
        <Link to="/cart">
          <Icons src="images/bag.svg" />
        </Link>
      </RContainer>
    </BottomContainer>
  );
};

export default BottomHeader;
