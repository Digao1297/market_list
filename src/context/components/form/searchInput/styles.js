import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};

  border-radius: 5px;
  margin-bottom: 8px;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.attention};

  margin: 7px;
`;
