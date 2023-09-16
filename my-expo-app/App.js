// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  // StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Text>Hello World!</Text>
      <View>
        <Text>Hello Again!!</Text>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
