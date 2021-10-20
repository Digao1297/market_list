import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { firestore, LoadIndicator } from "../../../context";

import { Container, Header, Title } from "./styles";
import { CardCart } from "../components/card";

export default function ListingScreen() {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadListing() {
    setLoading(true);
    try {
      await firestore
        .collection("cart")
        .orderBy("date", "desc")
        .onSnapshot((snapshot) => {
          let list = [];

          snapshot.forEach((doc) => {
            let cart = doc.data();
            cart.id = doc.id;

            list.push(cart);
          });
          return setListing(list);
        });
    } catch (error) {
      Alert.alert("Erro ao carregar os dados");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Listas</Title>
      </Header>
      {loading ? (
        <LoadIndicator />
      ) : (
        <FlatList
          data={listing}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CardCart data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
