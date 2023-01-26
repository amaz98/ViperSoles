import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { PTSansNarrow_400Regular } from "@expo-google-fonts/pt-sans-narrow";

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
`;

export const FormBox = styled.View`
  width: 90%;
`;

export const LoginTextInput = styled.TextInput`
  background-color: #EEEEEE;
  padding: 10px;
  padding-right:27px;
  padding-left: 55px;
  font-size: 14px;
  height: 50px;
  width: 320px;
  resizeMode="none"
  borderBottomWidth: 1.0;
  borderWidth:2px;
  borderColor: #000000;
  borderRadius: 7px;
`;

export const LoginInputLabel = styled.Text`
  color: #000000;
  font-size: 12px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export const LoginInputIcon = styled.View`
  left: 15px;
  top: 37px;
  position: absolute;
  z-index: 1;
`;

export const TextEyeHideIcon = styled.TouchableOpacity`
  right: 15px;
  top: 43px;
  position: absolute;
  z-index: 1;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  height: 40px;
  width: 320px;
  background-color: #000000;
  resizeMode="none"
  borderWidth:2px;
  borderRadius: 20px;
  margin-top:20px;
  overflow: hidden;
`;

export const LoginButtonText = styled.Text`
  font-size: 15px;
`;

export const EmailError = styled.Text`
  font-size: 15px;
  color: #ff3d22;
`;

export const UserNameContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  resizeMode="none"
  borderBottomWidth: 1.0;
  borderWidth:0px;
  borderColor: #000000;
  borderRadius: 10px;
  background-color: #FFFFFF;
  justify-content: center;
`;

export const UserCredButtonContainer = styled.View`
  width: 100%;
  height: 30px;
  display: "flex";
`;

export const UserCredMenuButtonContainer = styled.View`
  width: 100%;
  height: 800px;
  background-color: #ffffff;
  resizeMode="none"
  borderWidth: 0px;
  borderColor: #000000;
  borderRadius: 30px;
  margin-top:150px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const UserCredContainer = styled.View`
  width: 80%;
  height: 50px;
  background-color: #000000;
`;

export const UserNameText = styled.Text`
  font-family: "PTSansNarrow_400Regular";
  font-size: 30px;
  color: #000000;
  text-align: center;
`;

export const UserOrderButton = styled.TouchableOpacity``;
