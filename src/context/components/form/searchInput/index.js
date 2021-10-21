import React from "react";

import { Container, Input } from "./styles";

export function SearchInput({ ...rest }) {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  );
}
