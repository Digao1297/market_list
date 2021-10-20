import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: 16px;
  margin-right: 16px;
`;

export const Header = styled.View`
  width: 100%;
  height: 64px;
  align-items: center;
  flex-direction: row;

  margin-top: 64px;
`;

export const HeaderTitle = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const GobackIcon = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View`
  margin-bottom: 24px;
  margin-top: 8px;
`;
