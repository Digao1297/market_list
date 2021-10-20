import React from "react";

import { Container, Date, Total } from "./styles";

export function CardCart({ data }) {
  const date = data.date;
  const total = data.total;

  return (
    <Container>
      <Date>{date}</Date>
      <Total>R$ {total}</Total>
    </Container>
  );
}
