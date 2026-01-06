import React, { ComponentType, FC } from "react";
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Divider } from "react-native-elements";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import type { IconProps } from "react-native-vector-icons/Icon";
import { Colors } from "./Colors";

interface TextInputsProps {
  id?: string;
  value?: string;
  onChange?: (text: string) => void;
  onBlue?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder?: string;
  keyboardType?: TextInputProps["keyboardType"];
  width?: number | any;
  iconname?: IconProps["name"];
  focusable?: boolean;
  secureTextEntry?: boolean;
  error?: boolean | any;
  texterror?: string | any;
  label?: string;
}

const AntDesign = AntDesignIcon as ComponentType<IconProps>;

const TextInputs: FC<TextInputsProps> = ({
  id,
  value,
  onChange,
  onBlue,
  placeholder,
  keyboardType,
  width,
  iconname,
  focusable,
  secureTextEntry,
  error = false,
  texterror,
  label,
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[styles.inputContainer, { borderColor: error ? "red" : "gray" }]}
      >
        {iconname ? (
          <View style={styles.iconWrapper}>
            <View style={styles.iconContainer}>
              <AntDesign name={iconname} color={Colors.primary} size={25} />
            </View>
            <Divider
              style={[styles.divider, { borderColor: error ? "red" : "gray" }]}
            />
          </View>
        ) : null}

        <TextInput
          id={id}
          value={value}
          onChangeText={onChange}
          onBlur={onBlue}
          placeholder={placeholder}
          keyboardType={keyboardType}
          focusable={focusable}
          secureTextEntry={secureTextEntry}
          style={[styles.textInput, { width: width ?? "100%" }]}
        />
      </View>

      {error && texterror ? (
        <Text style={styles.errorText}>{texterror}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: "gray",
    fontFamily: "monst-r",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    height: "100%",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  divider: {
    borderWidth: 0.2,
    height: "100%",
    margin: 10,
    marginTop: -0,
  },
  textInput: {
    height: 50,
    fontFamily: "monst-r",
    fontSize: 16,
  },
  errorText: {
    fontSize: 9,
    color: "red",
    fontFamily: "monst-r",
    marginLeft: 10,
  },
});

export default TextInputs;
