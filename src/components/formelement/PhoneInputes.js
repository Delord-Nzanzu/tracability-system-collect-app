// import { View, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import React from "react";

const PhoneInputes = () => {
  const [phoneNumber, setphoneNumber] = React.useState("");

  //   const phoneInput = useRef(null);
  const getPhone = () => {
    return (
      <PhoneInput
        // ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="CD"
        layout="first"
        withShadow
        autoFocus={false}
        containerStyle={{
          width: "100%",
          height: 45,
          borderColor: "#fff",
          borderWidth: 1,
          elevation: 0,
          borderRadius: 5,
          backgroundColor: "#FFF",
        }}
        placeholder="994..."
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />
    );
  };
  return { phoneNumber, getPhone, setphoneNumber };
};

export default PhoneInputes;
