import React from "react";
import { products } from "../products";
import {
  CardItem,
  Colors,
  Container,
  Image,
  Name,
  OffPrice,
  Price,
  PriceWrapper,
  ProductGridContainer,
  Title,
  LinkProduct,
} from "./ProductGrid.style.js";

const ProductGrid = () => {
  return (
    <Container>
      <Title> To get and to gift</Title>
      <ProductGridContainer>
        {products.map((product) => (
          <CardItem>
            <Image src={product.image} />
            <LinkProduct to={product.name}>
              <Name>{product.name}</Name>
            </LinkProduct>
            <Colors>{`+ ${product.colors} colors`}</Colors>
            <PriceWrapper>
              <OffPrice>$ {product.price.toFixed(2)}</OffPrice>
              <Price>$ {product.offPrice.toFixed(2)}</Price>
            </PriceWrapper>
          </CardItem>
        ))}
      </ProductGridContainer>
    </Container>
  );
};

export default ProductGrid;
