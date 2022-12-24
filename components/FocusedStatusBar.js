import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      barStyle={"dark-content"}
      translucent={false}
      {...props}
    ></StatusBar>
  ) : null;
};

export default FocusedStatusBar;
