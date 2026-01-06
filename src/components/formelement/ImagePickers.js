import React, { useEffect, useState } from "react";
// import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";

export default function ImagePickers() {
  const [image, setImage] = useState(null);

  const getImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "La permission d'accéder à la galerie photo a été refusée.",
      });
    } else {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          const selectedAssets = result.assets;
          for (const asset of selectedAssets) {
            // console.log("URI de l'élément :", asset.uri);
            setImage(asset.uri);
          }
        }
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2:
            "Erreur lors de la récupération de l'image depuis la galerie photo :" +
            error,
        });
      }
    }
  };

  return { image, getImage };
}
