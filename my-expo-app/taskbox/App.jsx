import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import React from "react";
// type CatProps = {
//   name: String,
// };

// const Cat = (props: CatProps) => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// };
// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Whiskers" />
//     </View>
//   );
// };

function App() {
  return (
    <ScrollView>
      <Text>Hello World!</Text>
      <View>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultValue="Type here"
      />
    </ScrollView>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
