import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import {
  StyledContainer,
  UserNameContainer,
  UserNameText,
  MenuButton,
  UserCredButtonContainer,
  UserCredMenuButtonContainer,
  UserCredContainer,
  CredentialButton,
  UserCredContainerText,
  SneakerScreenTitle,
  ProductCircle,
  SneakerPageImage,
  HundredImage,
  HundredImageText,
} from "./styles.js";
import { Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ContextCredentials } from "./components/ContextCredentials";
const SneakersScreen = ({ navigation }) => {
  const { logout } = useContext(ContextCredentials);
  return (
    <StyledContainer>
      <UserCredButtonContainer>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <MenuButton onPress={() => navigation.openDrawer()} style={{}}>
            <Ionicons name="ios-menu-sharp" size={20} color={"#000000"} />
          </MenuButton>
          <MenuButton onPress={() => logout()} style={{}}>
            <MaterialIcons name="logout" size={20} color={"#000000"} />
          </MenuButton>
        </View>
      </UserCredButtonContainer>
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 20 }}>
          <SneakerScreenTitle>Sneakers</SneakerScreenTitle>
          <View
            style={{ left: 0, right: 0, height: 2, backgroundColor: "#000" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ProductCircle onPress={() => navigation.navigate("Jordan")}>
              <SneakerPageImage source={require("./assets/JLogo.png")} />
            </ProductCircle>

            <ProductCircle>
              <SneakerPageImage source={require("./assets/YeezyLogo.png")} />
            </ProductCircle>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ProductCircle>
              <SneakerPageImage source={require("./assets/NikeLogo.png")} />
            </ProductCircle>
            <ProductCircle>
              <SneakerPageImage source={require("./assets/NBLogo.png")} />
            </ProductCircle>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                height: 150,
                width: "100%",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "#000",
                marginBottom: 20,
                overflow: "hidden",
                backgroundColor: "#000",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <HundredImage
                source={require("./assets/BlackBill.png")}
              ></HundredImage>

              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#000",
                  width: "100%",
                  height: 63,
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                <HundredImageText>Under $200</HundredImageText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </StyledContainer>
  );
};

export default SneakersScreen;
