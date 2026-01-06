import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Bootum = () => {
  const nav = useNavigation<any>();
  const route = useRoute<any>(); // pour connaître la route actuelle

  const buttons = [
    { label: "Acceuil", icon: "🏡", screen: "Home" },
    { label: "Fait la vente", icon: "🛒", screen: "Vente" },
    { label: "Caisse", icon: "💰", screen: "Caisse" },
    { label: "Crédit", icon: "📦", screen: "Credit" },
    { label: "Dépense", icon: "🏷️", screen: "Depense" }, // pas de navigation
  ];

  return (
    <View style={{ elevation: 10, padding: 10, backgroundColor: "#fff" }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          {buttons.map((btn, index) => {
            const isActive = route.name === btn.screen; // actif si la route correspond
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (btn.screen) nav.navigate(btn.screen);
                }}
                style={{
                  marginLeft: index !== 0 ? 20 : 0,
                  backgroundColor: isActive ? "#4AD9FF" : "transparent", // couleur active
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <Text style={{ textAlign: "center" }}>{btn.icon}</Text>
                <Text style={{ textAlign: "center", fontFamily: "monst" }}>
                  {btn.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Bootum;
