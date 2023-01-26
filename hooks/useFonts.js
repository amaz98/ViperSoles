import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    "PTSansNarrow-Regular": require("../assets/fonts/PTSansNarrow-Regular.ttf"),
  });

export default useFonts;
