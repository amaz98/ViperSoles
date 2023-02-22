import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { PanGestureHandler } from "react-native-gesture-handler";
import { clamp } from "react-native-redash";
import Animated, {
  Easing,
  event,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  StyledContainer,
  MenuButton,
  UserCredButtonContainer,
  SneakerScreenTitle,
  ProductCircle,
  SneakerPageImage,
  HundredImage,
  HundredImageText,
} from "./styles.js";
import { Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ContextCredentials } from "./components/ContextCredentials";
const JordanScreen = ({ navigation }) => {
  const { logout } = useContext(ContextCredentials);
  const handleGesture = ({ nativeEvent }) => {
    if (nativeEvent.translationY < 0) {
      navigation.navigate("Sneakers");
    }
  };
  const { height } = useWindowDimensions();
  const y = useSharedValue(0);
  const productPageSlideAnimation = useSharedValue(height);
  const unlockGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      y.value = 0;
    },
    onActive: (event) => {
      y.value = clamp(event.translationY, -height, 0);
    },
    onEnd: (event) => {
      if (-y.value > height / 2 || event.velocity < -500) {
        y.value = withTiming(-height, { easing: Easing.linear });
      } else {
        y.value = withTiming(0, { duration: 400, easing: Easing.linear });
      }
    },
  });
  const unlockProductGestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      console.log(height);
      productPageSlideAnimation.value = clamp(
        height / 2 + event.translationY,
        300,
        1000
      );
    },

    onEnd: (event) => {
      if (
        productPageSlideAnimation.value > height / 3 ||
        event.velocityY < -100
      ) {
        productPageSlideAnimation.value = withTiming(height, {
          easing: Easing.linear,
        });
      }
    },
  });
  const animatedContainer = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateY: withTiming(y.value, { duration: 100 }) }],
      };
    }),
    slideUp: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withTiming(productPageSlideAnimation.value, {
              easing: Easing.linear,
              duration: 100,
            }),
          },
        ],
      };
    }),
  };
  const handleProductPageOpen = () => {
    productPageSlideAnimation.value = withTiming(height / 5, {
      duration: 100,
      easing: Easing.linear,
    });
  };
  return (
    <View style={{ position: "relative" }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          paddingTop: 60,
          padding: 20,
        }}
      >
        <View
          style={{
            width: 100,
            height: 20,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <AntDesign name="filter" size={15} color={"#929292"} />
            <Text style={{ color: "#929292" }}>Filter by size</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={handleProductPageOpen}>
            <Image
              source={require("./assets/p1.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p2.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/p3.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p4.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/p5.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p6.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/p7.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p8.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/p9.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p10.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("./assets/p11.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/p12.png")}
              style={{ resizeMode: "contain", width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Animated.View
        style={[
          {
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            position: "absolute",
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "#000",
          },
          animatedContainer.slideUp,
        ]}
      >
        <PanGestureHandler onGestureEvent={unlockProductGestureHandler}>
          <Animated.View style={{ width: "100%", height: 100 }}>
            <Text style={{ textAlign: "center" }}>Swipe Down</Text>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
      <Animated.View
        style={[{ alignSelf: "center" }, animatedContainer.swipeable]}
      >
        <LinearGradient
          colors={["#e65d4e", "#3d3a3a", "#e6e6e6"]}
          style={{ flex: 1 }}
          end={{ x: 1, y: 3 }}
        >
          <StyledContainer style={{ justifyContent: "center" }}>
            <Image
              source={require("./assets/jb1.png")}
              style={{
                alignSelf: "center",
                transform: [{ translateX: 0 }],
              }}
            />

            <PanGestureHandler onGestureEvent={unlockGestureHandler}>
              <Animated.View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 100,
                  bottom: 0,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    color: "white",
                    marginBottom: 10,
                  }}
                >
                  Swipe to see all Jordans
                </Text>
                <FontAwesome
                  name="angle-double-down"
                  color={"#fff"}
                  style={{ alignSelf: "center" }}
                  size={20}
                />
              </Animated.View>
            </PanGestureHandler>
          </StyledContainer>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default JordanScreen;
