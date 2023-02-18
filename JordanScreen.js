import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
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
  const animatedContainer = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateY: withTiming(y.value, { duration: 100 }) }],
      };
    }),
  };
  return (
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
  );
};

export default JordanScreen;
