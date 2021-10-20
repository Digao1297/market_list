import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { FlatList, Alert, ActivityIndicator } from "react-native";
import { useCart, Product, ButtonForm, firestore } from "../../../context";

import {
  Container,
  Header,
  HeaderTitle,
  Title,
  GobackIcon,
  Footer,
} from "./styles";

export function CartScreen({ navigation }) {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(false);

  function handlerGoBack() {
    navigation.goBack();
  }

  async function handlerSave() {
    setLoading(true);
    try {
      let total = 0.0;
      cart.forEach((item) => {
        total += parseFloat(item.price);
      });
      const date = new Date();
      await firestore.collection("cart").add({
        products: JSON.stringify(cart),
        total,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      });
      setCart([]);
      navigation.goBack();
    } catch (error) {
      console.log(error.toString());
      Alert.alert("Erro ao salvar o carrinho");
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Header>
        <GobackIcon name="arrowleft" onPress={handlerGoBack} />
        <HeaderTitle>
          <Title>Carrinho</Title>
        </HeaderTitle>
      </Header>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Product data={item} isCart={false} />}
        showsHorizontalScrollIndicator={false}
      />
      <Footer>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ButtonForm title="Salvar" onPress={handlerSave} />
        )}
      </Footer>
    </Container>
  );
}
