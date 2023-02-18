import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const DrawerComponent = (props) => {
  return (
    <LinearGradient
      colors={["#fff", "transparent"]}
      style={{ flex: 1 }}
      end={{ x: 1, y: 3 }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ marginBottom: 100 }}>
          <Text>Header</Text>
        </View>

        <DrawerContentScrollView
          {...props}
          drawerContenetOptions={{ activeTintColor: "#fff" }}
        >
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View style={{ marginBottom: 10 }}>
          <Text>Log Out</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DrawerComponent;
