import "react-native-gesture-handler";
import "react-phone-number-input/style.css";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import StackNav from "./src/router/StackNav";

export default function App() {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#EAEAEA", //#EAEAEA
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar translucent={true} style="dark" />
          <StackNav />
          <Toast />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
