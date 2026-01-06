import { View, Text, StyleSheet } from "react-native";
import React, { ComponentType } from "react";
import { useStorie } from "../context/Context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import type { IconProps } from "react-native-vector-icons/Icon";

const Head = ({
  titre,
  subtite,
}: {
  titre: string | any;
  subtite: string | any;
}) => {
  const data = useStorie((e) => e.data);
  const AntDesign = FontAwesome as ComponentType<IconProps>;
  return (
    <View
      style={{
        padding: 15,
        elevation: 10,
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={style.title}>{titre}</Text>
          <Text style={style.subTite}>{subtite}</Text>
        </View>
        <View>
          <AntDesign name="ellipsis-v" size={20} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: "monst",
    fontSize: 20,
  },
  subTite: {
    fontFamily: "monst-r",
    fontSize: 16,
  },
});

export default Head;
