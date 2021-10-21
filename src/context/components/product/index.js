import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

import { useCart } from "../../hooks/cart_hook";
import { LoadIndicator } from "../loadIndicator";
import { firestore } from "../../firebase";

import { Container, Name, Price, TextPrice, ButtonAdd, Add } from "./styles";

export function Product({ data, isCart, navigation, ...rest }) {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(false);

  function handlerAddCart() {
    setCart([...cart, data]);
  }

  function handlerShowAlert() {
    Alert.alert("Deletar produto", "Deseja deletar o produto?", [
      {
        text: "Não",
        style: "default",
      },
      { text: "Sim", onPress: handlerDeleteProdut },
    ]);
  }

  async function handlerDeleteProdut() {
    setLoading(true);
    try {
      await firestore.collection("products").doc(data.id).delete();
    } catch (error) {
      Alert.alert("Erro ao deletaro produto");
    } finally {
      setLoading(false);
    }
  }
  function handlerUpdateProduct() {
    navigation.navigate("product", {
      id: data.id,
      name: data.name,
      price: data.price,
    });
  }

  return (
    <Container
      {...rest}
      onPress={handlerUpdateProduct}
      onLongPress={() => {
        loading ? null : handlerShowAlert();
      }}
    >
      {loading ? (
        <LoadIndicator />
      ) : (
        <>
          <Name>{data.name}</Name>
          <Price>
            <TextPrice>R$ {data.price}</TextPrice>
            {isCart && (
              <ButtonAdd onPress={handlerAddCart}>
                <Add name="plus" />
              </ButtonAdd>
            )}
          </Price>
        </>
      )}
    </Container>
  );
}
