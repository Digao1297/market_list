import React, { useContext } from "react";
import { Alert } from "react-native";
import { SigninSocialButton } from "../../components/SigninSocialButton";

import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export default function InitialAuthScreen() {
  const { signIn } = useAuth();

  async function handlerSignIn() {
    try {
      await signIn("digao1297@gmail.com", "cicada3301");
    } catch (error) {
      console.log(error.toString());
      Alert.alert("Não foi possivel se conectar");
    }
  }

  return (
    <Container>
      <Header>
        <Title>
          Gerencie suas lista {"\n"}
          de compras
        </Title>
        <SignInTitle>Faça seu login</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SigninSocialButton title="Entrar" onPress={handlerSignIn} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
