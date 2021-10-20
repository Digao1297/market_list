import React, { useContext } from "react";

import { useCart } from "../../../../context";

import { Container, Icon, Number, NumberText } from "./styles";

export function Cart({ ...rest }) {
  const { cart } = useCart();

  return (
    <Container {...rest}>
      <Icon name="shoppingcart" />
      {cart.length > 0 && (
        <Number>
          <NumberText>{cart.length > 9 ? "+9" : cart.length}</NumberText>
        </Number>
      )}
    </Container>
  );
}
