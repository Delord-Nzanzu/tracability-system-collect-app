import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoaderScreen } from "../view/loader/Loader";
import PresentationScreen from "../view/loader/PresentationScrem";
import Login from "../view/login/Login";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
        title: "Revotech",
      }}
    >
      <Stack.Screen name="Loading" component={LoaderScreen} />
      <Stack.Screen name="PresentationScreen" component={PresentationScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNav;
