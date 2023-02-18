import React, { useContext, useEffect, useState } from "react";
import { Center, Text } from "native-base";
import { Image, View, TouchableOpacity, Linking } from "react-native";
import { ContextCredentials } from "./components/ContextCredentials";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
} from "./styles.js";
import useFonts from "./hooks/useFonts";
import { Shadow } from "react-native-shadow-2";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const UserPage = ({ navigation }) => {
  const { logout } = useContext(ContextCredentials);
  return (
    <StyledContainer>
      <Shadow
        style={{ flex: 1 }}
        offset={[0, 20]}
        stretch={true}
        distance={900}
        startColor={"#525252"}
      >
        <UserCredButtonContainer>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MenuButton onPress={() => navigation.openDrawer()} style={{}}>
              <Ionicons name="ios-menu-sharp" size={20} color={"#fff"} />
            </MenuButton>
            <MenuButton onPress={() => logout()} style={{}}>
              <MaterialIcons name="logout" size={20} color={"#fff"} />
            </MenuButton>
          </View>
        </UserCredButtonContainer>
        <UserNameContainer>
          <UserNameText style={{}}>{`Hello,\n Abdullah`}</UserNameText>
        </UserNameContainer>
        <UserCredMenuButtonContainer>
          <View style={{ height: 540 }}>
            <CredentialButton>
              <UserCredContainer>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign
                    name="inbox"
                    size={20}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      left: 10,
                    }}
                  />
                  <UserCredContainerText>My Orders</UserCredContainerText>
                </View>
              </UserCredContainer>
            </CredentialButton>
            <CredentialButton>
              <UserCredContainer>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign
                    name="hearto"
                    size={20}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      left: 10,
                    }}
                  />
                  <UserCredContainerText>My Wishlist</UserCredContainerText>
                </View>
              </UserCredContainer>
            </CredentialButton>
            <CredentialButton>
              <UserCredContainer>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome5
                    name="house-user"
                    size={20}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      left: 10,
                    }}
                  />
                  <UserCredContainerText>My Address</UserCredContainerText>
                </View>
              </UserCredContainer>
            </CredentialButton>
            <CredentialButton>
              <UserCredContainer>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="payment"
                    size={20}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      left: 10,
                    }}
                  />
                  <UserCredContainerText>Payment Info</UserCredContainerText>
                </View>
              </UserCredContainer>
            </CredentialButton>
          </View>
        </UserCredMenuButtonContainer>
      </Shadow>
    </StyledContainer>
  );
};

export default UserPage;
