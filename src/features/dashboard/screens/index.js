import React from "react";

import {
  Container,
  Header,
  Title,
  Cart,
  Categories,
  CategoriesTitle,
} from "./styles";

import { InputForm, HighlightCard } from "../../../context";
import pineapple from "../../../../assets/pineapple.png";

export default function DashboardScreen() {
  return (
    <Container>
      <Header>
        <Title>Bom para você. {"\n"}Ótimo para a vida</Title>
        <Cart name="shoppingcart" />
      </Header>

      <Categories>
        <CategoriesTitle>Categorias</CategoriesTitle>
      </Categories>
      <HighlightCard image={pineapple} />
    </Container>
  );
}
