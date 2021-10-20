import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 0 32px;
`;

export const Header = styled.View`
  width: 100%;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 64px;
`;

export const Search = styled.View`
  width: ${RFPercentage(40)}px;
`;

export const ProductTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  margin: 16px 0;
`;

export const FooterList = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-bottom: 16px;
`;

export const AddButton = styled(TouchableOpacity)`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;

  border-radius: 50px;
`;

export const AddButtonIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;
