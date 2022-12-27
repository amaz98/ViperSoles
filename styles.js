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
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #000000;
  padding: 10px;
  fontfamily: "PTSansNarrow-Regular";
`;

export const FormBox = styled.View`
  width: 90%;
`;

export const LoginTextInput = styled.TextInput`
  background-color: #ccc;
  padding: 10px;
  padding-right:10px;
  padding-left: 55px;
  font-size: 14px;
  height: 50px;
  margin-top: 10px;
  width: 300px;
  resizeMode="none"
  borderBottomWidth: 1.0;
  borderColor: #000000;
  borderRadius: 7px;

`;

export const LoginInputLabel = styled.Text`
  color: #ccc;
  font-size: 12px;
  text-align: left;
`;

export const LoginInputIcon = styled.View`
  left: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`;

export const TextEyeHideIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  margin-vertical: 5px;
  height: 60px;
`;

export const LoginButtonText = styled.Text`
  font-size: 15px;
`;
