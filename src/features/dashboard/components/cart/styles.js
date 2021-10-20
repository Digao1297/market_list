import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)``;

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
`;

export const Number = styled.View`
  background-color: ${({ theme }) => theme.colors.attention};
  width: 20px;
  height: 20px;

  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const NumberText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;
