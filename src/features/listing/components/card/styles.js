import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: 8px 16px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;
export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;
