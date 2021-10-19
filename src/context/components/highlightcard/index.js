import React from "react";

import {
  Container,
  ImageContainer,
  Image,
  Name,
  Footer,
  Price,
  TextPrice,
  Add,
} from "./styles";

export function HighlightCard({ image }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={image} />
      </ImageContainer>
      <Footer>
        <Name>pineapple</Name>
        <Price>
          <TextPrice>R$1.00</TextPrice>
          <Add name="plus" />
        </Price>
      </Footer>
    </Container>
  );
}
