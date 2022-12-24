import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { FocusedStatusBar, HomeHeader } from "../components";
import { StatusBar } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
