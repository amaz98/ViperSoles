import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// below are all of the styles which will be added to the corresponding elements

// for example the StyledContainer component will have the following properties to it's View component
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Logo = styled.Image`
    width:250px
    height: 250px
`;

export const LoginTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #000000;
  padding: 10px;
`;
