import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 64px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin-top: 45px;
  padding: 0px 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Cart = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
`;

export const Categories = styled.View`
  width: 100%;

  justify-content: flex-start;
  padding: 16px;
`;

export const CategoriesTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const HighlightCard = styled.View``;
