import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-elements";
import { ItemDrawer } from "../data/Data";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonNavigation = ({ navigation }) => {
  const [index, setIndex] = useState("1");
  const changeColor = (e) => {
    setIndex(e.id);
    navigation.navigate(e.link);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <Card>
        <View
          style={{
            flexDirection: "row",
            marginLeft: -10,
          }}
        >
          {ItemDrawer.map((e) => {
            return (
              <View
                key={e.id}
                style={{
                  width: 75,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                }}
              >
                <TouchableOpacity onPress={() => changeColor(e)}>
                  {e.icon}
                </TouchableOpacity>
                <Text
                  style={{
                    color: index === e.id ? "green" : "#000",
                  }}
                  onPress={() => changeColor(e)}
                >
                  {e.title}
                </Text>
              </View>
            );
          })}
        </View>
      </Card>
    </View>
  );
};

export default ButtonNavigation;
