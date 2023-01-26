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
} from "./styles.js";
import useFonts from "./hooks/useFonts";
import { Shadow } from "react-native-shadow-2";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const UserPage = () => {
  return (
    <StyledContainer>
      <Shadow
        style={{ flex: 1 }}
        offset={[0, 20]}
        stretch={true}
        distance={600}
        startColor={"#9FFF87"}
      >
        <UserCredButtonContainer>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MenuButton style={{}}>
              <Ionicons name="ios-menu-sharp" size={20} color={"#000000"} />
            </MenuButton>
            <MenuButton style={{}}>
              <MaterialIcons name="logout" size={20} color={"#000000"} />
            </MenuButton>
          </View>
        </UserCredButtonContainer>
        <UserNameContainer>
          <UserNameText>Hello, Abdullah</UserNameText>
        </UserNameContainer>
        <UserCredMenuButtonContainer>
          <MenuButton>
            <UserCredContainer></UserCredContainer>
          </MenuButton>
          <MenuButton></MenuButton>
          <MenuButton></MenuButton>
          <MenuButton></MenuButton>
        </UserCredMenuButtonContainer>
      </Shadow>
    </StyledContainer>
  );
};

export default UserPage;
