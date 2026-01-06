import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<any>(null);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [bandwidth, setBandwidth] = useState(null);

  const checkInternetAccess = async () => {
    try {
      await axios.get("https://clients3.google.com/generate_204", {
        timeout: 5000,
      });
      setIsOnline(true);
    } catch (error) {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      // setBandwidth(state.details?.downlink ?? null); // Récupère la bande passante en Mbps
    });

    checkInternetAccess(); // Vérifie Internet au démarrage

    const interval = setInterval(checkInternetAccess, 30000); // Vérifie toutes les 30 sec

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return { isConnected, isOnline, bandwidth };
};

export default useNetworkStatus;
