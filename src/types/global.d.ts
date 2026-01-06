declare module "react-native-phone-number-input" {
  import * as React from "react";
  import { TextInputProps, StyleProp, ViewStyle } from "react-native";

  export interface PhoneInputProps extends TextInputProps {
    defaultCode?: string;
    layout?: "first" | "second";
    containerStyle?: StyleProp<ViewStyle>;
    textContainerStyle?: StyleProp<ViewStyle>;
    onChangeFormattedText?: (text: string) => void;
  }

  export default class PhoneInput extends React.Component<PhoneInputProps> {}
}
