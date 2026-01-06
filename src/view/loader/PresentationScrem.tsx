import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "../../components/formelement/Colors";
import FadeInView from "../../components/formelement/FadeInView";

const { width } = Dimensions.get("window");

const PresentationScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nav = useNavigation<any>();
  const slides = [
    {
      title: "Bienvenue sur Talia Service",
      image: require("../../../assets/icon.png"),
      description:
        "Talia Service est votre solution complète pour gérer le stock et vendre vos produits facilement et efficacement.",
    },
    {
      title: "Notre mission",
      image: require("../../../assets/icon.png"),
      description:
        "Simplifier la gestion des stocks et des ventes pour les entreprises et commerçants, tout en assurant un suivi précis et fiable.",
    },
    {
      title: "Restez organisé",
      image: require("../../../assets/icon.png"),
      description:
        "Suivez vos produits, gérez vos stocks, analysez vos ventes et restez informé pour prendre les meilleures décisions pour votre business.",
    },
    {
      title: "Commencez dès maintenant !",
      image: require("../../../assets/icon.png"),
      description:
        "Appuyez sur le bouton ci-dessous pour créer votre compte et découvrir comment Talia Service peut optimiser la gestion de votre activité.",
      button: (
        <TouchableOpacity
          onPress={() => nav.navigate("Login")}
          style={{
            backgroundColor: Colors.primary, // couleur à adapter
            padding: 15,
            margin: 10,
            borderRadius: 10,
            borderColor: Colors.primary,
            borderWidth: 1,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: Colors.textWhite,
              textAlign: "center",
              fontFamily: "monst",
              fontSize: 16,
            }}
          >
            Continuer
          </Text>
        </TouchableOpacity>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <FadeInView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Carousel
              loop={false}
              width={width}
              height={650}
              data={slides}
              scrollAnimationDuration={800}
              onSnapToItem={(index: any) => setCurrentIndex(index)}
              renderItem={({ item }) => (
                <View style={styles.slide}>
                  <Image
                    source={item?.image}
                    alt="image"
                    style={{
                      width: 300,
                      height: 350,
                      resizeMode: "contain",
                      borderRadius: 10,
                    }}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  {item?.button ? (
                    <View style={{ width: "100%", marginBottom: 50 }}>
                      {item.button}
                    </View>
                  ) : (
                    <Text></Text>
                  )}
                </View>
              )}
            />
            <Text style={styles.pagination}>
              {currentIndex + 1} / {slides.length}
            </Text>
          </View>
        </FadeInView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  slide: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginTop: 50,
    padding: 20,
    width: width * 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.textPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 25,
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "monst",
    color: Colors.textPrimary,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "monst-r",
    color: Colors.textPrimary,
  },
  pagination: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "monst",
    color: Colors.primary,
  },
});

export default PresentationScreen;
