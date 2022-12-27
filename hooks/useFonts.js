import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "PTSansNarrow-Regular": require("./fonts/PTSansNarrow-Regular.ttf"),
  });
