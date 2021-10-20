import React from "react";

import { useCart } from "../../hooks/cart_hook";

import { Container, Name, Price, TextPrice, ButtonAdd, Add } from "./styles";

export function Product({ data, isCart }) {
  const { cart, setCart } = useCart();

  function handlerAddCart() {
    setCart([...cart, data]);
  }

  return (
    <Container>
      <Name>{data.name}</Name>
      <Price>
        <TextPrice>R$ {data.price}</TextPrice>
        {isCart && (
          <ButtonAdd onPress={handlerAddCart}>
            <Add name="plus" />
          </ButtonAdd>
        )}
      </Price>
    </Container>
  );
}
