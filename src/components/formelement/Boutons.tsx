import React, { ComponentType } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { Grid } from "react-native-animated-spinkit";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import type { IconProps } from "react-native-vector-icons/Icon";

interface BoutonsProps {
  text: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  iconname?: IconProps["name"];
}

// ⚡ Typage explicite : AntDesign devient un vrai composant JSX
const AntDesign = AntDesignIcon as ComponentType<IconProps>;

const Boutons = ({
  text,
  disabled = false,
  onPress,
  iconname,
}: BoutonsProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={styles.button}
      >
        {disabled ? (
          <View style={styles.spinnerWrapper}>
            <Grid size={25} color={"#4AD9FF"} />
          </View>
        ) : (
          <View style={styles.content}>
            {iconname && (
              <AntDesign
                name={iconname}
                color="#fff"
                size={20}
                style={styles.icon}
              />
            )}
            <Text style={styles.text}>{text}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 10,
    // borderColor: "red",
    backgroundColor: "#4AD9FF",
    color: "#000",
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  spinnerWrapper: {
    marginRight: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderRadius: 0,
    marginRight: 10,
  },
  text: {
    fontFamily: "monst",
    fontSize: 16,
  },
});

export default Boutons;
