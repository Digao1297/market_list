import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFPercentage(30)}px;
  height: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 10px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 60%;
`;

export const Image = styled.Image``;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;

  padding: 8px 16px;
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

export const Add = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
`;
