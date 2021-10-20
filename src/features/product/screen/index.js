import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Keyboard, TouchableWithoutFeedback, Alert } from "react-native";

import {
  ButtonForm,
  InputForm,
  firestore,
  LoadIndicator,
} from "../../../context";

import { Container, Header, Title, Form, Fields } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  price: Yup.number()
    .typeError("")
    .positive("O preço não pode ser negativo")
    .required("O preço é obrigatório"),
});

export default function ProductScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handlerRegister(form) {
    setLoading(true);
    try {
      await firestore.collection("products").add(form);
      navigation.goBack();
    } catch (error) {
      console.log(error.toString());
      Alert.alert("Erro ao salvar os dados");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="price"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.price && errors.price.message}
            />
          </Fields>
          {loading ? (
            <LoadIndicator />
          ) : (
            <ButtonForm
              title="Salvar"
              onPress={handleSubmit(handlerRegister)}
            />
          )}
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
