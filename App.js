import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./src/Tasks";

export default function App() {
  return (
    <View>
      <Tasks />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
