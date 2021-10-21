import React, { useState, useEffect } from "react";

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

import {
  SearchInput,
  Product,
  firestore,
  LoadIndicator,
} from "../../../context";
import { FlatList, TouchableWithoutFeedback, Keyboard } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function DashboardScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
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
        setData(list);
        setListData(list);
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

  function handlerSearchOnChange(value) {
    const result = data.filter((x) => x.name.toLowerCase().startsWith(value));
    setListData(result);
  }

  useEffect(() => {
    handlerLoadData();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Search>
            <SearchInput
              placeholder="O que você está procurando "
              onChangeText={handlerSearchOnChange}
            />
          </Search>
          <Cart name="shoppingcart" onPress={() => handlerOpenCart()} />
        </Header>

        <ProductTitle>Produtos</ProductTitle>

        {loading ? (
          <LoadIndicator />
        ) : (
          <FlatList
            data={listData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Product
                data={item}
                isCart={true}
                navigation={navigation}
                loadData={handlerLoadData}
              />
            )}
            showsVerticalScrollIndicator={false}
            style={{ height: RFPercentage(80) }}
            ListFooterComponent={() => (
              <FooterList>
                <AddButton onPress={() => navigation.navigate("product", {})}>
                  <AddButtonIcon name="plus" />
                </AddButton>
              </FooterList>
            )}
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}
