import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Price = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const TextPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ButtonAdd = styled(TouchableOpacity)`
  height: 30px;
  width: 30px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;
`;

export const Add = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
`;
