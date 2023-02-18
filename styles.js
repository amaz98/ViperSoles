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
  height: 140px;
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
  borderBottomWidth: 1.0;
  borderWidth: 2px;
  borderColor: #000;
  borderRadius: 30px;
  margin-top:30px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const CredentialButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const UserCredContainer = styled.View`
  width: 80%;
  height: 60px;
  resizeMode="none"
  borderBottomWidth: 1.0;
  borderWidth: 1px;
  borderColor: #000;
  borderRadius: 30px;
  background-color: #FFFFFF;
  justify-content:center;
  flexDirection: 'row';
  shadowColor: '#000000',
  shadowOpacity: 0.4,

`;

export const UserCredContainerText = styled.Text`
  font-family: "PTSansNarrow_400Regular";
  font-size: 20px;
  text-align: center;
`;

export const UserNameText = styled.Text`
  font-family: "PTSansNarrow_400Regular";
  font-size: 45px;
  color: #fff;
  margin-left: 30px;
`;

export const SneakerScreenTitle = styled.Text`
  font-family: "PTSansNarrow_400Regular";
  font-size: 45px;
  color: #000;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ProductCircle = styled.TouchableOpacity`
  width: 150px;
  height: 200px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #000;
  margin-bottom: 20px;
`;

export const SneakerPageImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const HundredImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

export const HundredImageText = styled.Text`
  font-family: "PTSansNarrow_400Regular";
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  left: 10px;
  text-align: center;
`;

export const UserOrderButton = styled.TouchableOpacity``;
