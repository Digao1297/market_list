import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  Header,
  Search,
  ProductTitle,
  AddButton,
  AddButtonIcon,
  FooterList,
} from "./styles";

import { Cart } from "../components/cart";

import { InputForm, Product, firestore, LoadIndicator } from "../../../context";
import { FlatList } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function DashboardScreen({ navigation }) {
  const { control, handleSubmit } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handlerLoadData() {
    setLoading(true);
    try {
      await firestore.collection("products").onSnapshot((snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          let product = doc.data();
          product.id = doc.id;

          list.push(product);
        });
        return setData(list);
      });
    } catch (error) {
      Alert.alert("Erro ao carregar os dados");
    } finally {
      setLoading(false);
    }
  }

  function handlerOpenCart() {
    navigation.navigate("cart");
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      handlerLoadData();
    });
  }, []);

  return (
    <Container>
      <Header>
        <Search>
          <InputForm
            control={control}
            name="search"
            placeholder="O que você está procurando "
          />
        </Search>
        <Cart name="shoppingcart" onPress={() => handlerOpenCart()} />
      </Header>

      <ProductTitle>Produtos</ProductTitle>

      {loading ? (
        <LoadIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Product data={item} isCart={true} />}
          showsVerticalScrollIndicator={false}
          style={{ height: RFPercentage(80) }}
          ListFooterComponent={() => (
            <FooterList>
              <AddButton onPress={() => navigation.navigate("product")}>
                <AddButtonIcon name="plus" />
              </AddButton>
            </FooterList>
          )}
        />
      )}
    </Container>
  );
}
