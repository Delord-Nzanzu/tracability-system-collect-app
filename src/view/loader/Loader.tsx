import { View, Text, useWindowDimensions, Image } from "react-native";
import * as React from "react";
import { useFonts } from "expo-font";
import { Grid, Flow } from "react-native-animated-spinkit";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../components/formelement/Colors";

export const LoaderScreen = () => {
  const { width } = useWindowDimensions();
  const nav = useNavigation<any>();

  const [loaded] = useFonts({
    monst: require("../../../assets/fonts/static/Montserrat-Bold.ttf"),
    "monst-r": require("../../../assets/fonts/static/Montserrat-Regular.ttf"),
    "monst-i": require("../../../assets/fonts/static/Montserrat-Italic.ttf"),
  });
  React.useEffect(() => {
    if (!loaded) return;
    setTimeout(() => {
      nav.navigate("PresentationScreen");
    }, 5000);
  }, [loaded]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.background,
      }}
    >
      <StatusBar
        translucent={true}
        backgroundColor={Colors.primary}
        style="light"
      />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          style={[
            { flex: 0.3, justifyContent: "center", borderRadius: 10 },
            { width, resizeMode: "contain", borderRadius: 10 },
          ]}
          source={require("../../../assets/icon.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              color: Colors.textPrimary,
              fontSize: 16,
              marginTop: 20,
            }}
          >
            Veuillez patienter
          </Text>
          <Flow
            style={{ marginTop: 30, marginLeft: 10 }}
            size={20}
            color={Colors.textPrimary}
          />
        </View>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Grid size={25} color={Colors.primary} />
      </View>
    </View>
  );
};
