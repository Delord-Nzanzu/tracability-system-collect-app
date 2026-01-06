import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList, SelectListProps } from "react-native-dropdown-select-list";

interface SelectInputProps {
  data: { key: string; value: string; prix?: number }[];
  setSelected: (item: { key: string; value: string; prix?: number }) => void;
  label?: string;
}

const SelectInput: FC<SelectInputProps> = ({ data, setSelected, label }) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      {label && <Text style={styles.label}>{label}</Text>}

      <SelectList
        inputStyles={styles.input}
        setSelected={setSelected}
        data={data}
        save="key"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "monst-r",
    marginLeft: 5,
    color: "gray",
    marginBottom: 5,
  },
  input: {
    height: 30,
  },
});

export default SelectInput;
