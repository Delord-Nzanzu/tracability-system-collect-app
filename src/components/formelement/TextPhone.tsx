import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

export default function TextPhone() {
  const [value, setValue] = useState<any>();

  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
}
