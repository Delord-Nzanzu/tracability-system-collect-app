import React, { useState } from "react";
import Toast from "react-native-toast-message";
import useNetworkStatus from "../connection/useNetworkStatus";
import { Urls } from "../../Api/Request";
import Notification from "../../components/formelement/Notify";
import { useStorie } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";

interface iData {
  login?: string;
  passwords?: string;
}

export default function useLogin() {
  const [disable, setDisable] = useState(false);
  const { isOnline, isConnected } = useNetworkStatus();
  const setData = useStorie((e) => e.setData);
  const nav = useNavigation<any>();

  const login = async ({ datalogin }: { datalogin: iData }) => {
    setDisable(true);
    try {
      if (!isConnected) {
        Toast.show({
          type: "error",
          text1: "Pas de connexion réseau",
          text2: "Pas de connexion réseau",
        });

        setDisable(false);
        return;
      } else if (!isOnline) {
        Toast.show({
          type: "error",
          text1: "L'accès à Internet est bloqué",
          text2: "L'accès à Internet est bloqué",
        });

        setDisable(false);
        return;
      } else {
        //Gestion de la requette ici
        const data = await Urls.post("auth/auth", datalogin);
        Notification({
          text1: "Information",
          text2: data.data?.message,
          type: "success",
        });

        setData({
          dataUtilisateur: data?.data?.data,
        });
        nav.navigate("Home");
        setDisable(false);
      }
    } catch (error: any) {
      setDisable(false);
      if (error.response) {
        // setError(false);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.response.data.message,
        });
      } else if (error.request) {
        // setError(false);
        Toast.show({
          type: "error",
          text1: "Erreur de connexion",
          text2:
            "Le serveur est momentanément indisponible. Veuillez réessayer plus tard.",
        });
      } else {
        // setError(false);
        Toast.show({
          type: "error",
          text1: "Errors",
          text2: error.message + " " + "probleme au serveur",
        });
      }
    }
  };
  return {
    login,
    disable,
  };
}
