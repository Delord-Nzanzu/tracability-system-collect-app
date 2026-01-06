import { View, Text } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";

interface toast {
  type: "error" | "info" | "success";
  text1?: string;
  text2?: string;
}

export default function Notification({ text1, type, text2 }: toast) {
  return Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
}
