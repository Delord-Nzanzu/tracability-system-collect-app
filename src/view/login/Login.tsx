import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import TextInputs from "../../components/formelement/TextInputs";
import Boutons from "../../components/formelement/Boutons";
import { useFormik } from "formik";
import * as yup from "yup";
import { StatusBar } from "expo-status-bar";
import useLogin from "../../hooks/login/useLogin";
import { Colors } from "../../components/formelement/Colors";
import FadeInView from "../../components/formelement/FadeInView";

export default function Login() {
  const { disable, login } = useLogin();

  const validationForm = useFormik({
    initialValues: {
      login: "",
      passwords: "",
    },
    validationSchema: yup.object({
      login: yup.string().required("Le champs est obligatoire"),
      passwords: yup.string().required("Le champs est obligatoire"),
    }),
    onSubmit: (e) => {
      const data = {
        login: e.login.trim().replace(/\s+/g, "").toLowerCase(),
        passwords: e.passwords,
      };
      login({ datalogin: data });
    },
  });
  return (
    <View style={style.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <FadeInView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              margin: 10,
            }}
          >
            <View style={style.icone}>
              <Image
                source={require("../../../assets/icon.png")}
                style={{
                  width: 350,
                  height: 200,
                  //   marginTop: 15,
                  objectFit: "contain",
                }}
              />
            </View>
            <Text style={style.textLogin}>Connexion</Text>
            <Text
              style={{
                fontFamily: "monst-r",
                marginTop: 5,
              }}
            >
              Bienvenue ! Veuillez vous connecter pour accéder à votre tableau
              de bord.
            </Text>
            <TextInputs
              label="Adresse email"
              iconname="mail"
              placeholder="ton-email.com"
              value={validationForm.values?.login}
              onBlue={validationForm.handleBlur("login")}
              onChange={validationForm.handleChange("login")}
              error={
                validationForm?.errors?.login &&
                validationForm?.touched?.login &&
                true
              }
              texterror={
                validationForm?.errors?.login &&
                validationForm?.touched?.login &&
                validationForm?.touched?.login
              }
            />
            <TextInputs
              label="Mot de passe"
              iconname="key"
              placeholder="*******"
              value={validationForm.values?.passwords}
              onBlue={validationForm.handleBlur("passwords")}
              onChange={validationForm.handleChange("passwords")}
              error={
                validationForm?.errors?.passwords &&
                validationForm?.touched?.passwords &&
                true
              }
              texterror={
                validationForm?.errors?.passwords &&
                validationForm?.touched?.passwords &&
                validationForm?.touched?.passwords
              }
              secureTextEntry={true}
            />
            <Boutons
              text="Connexion"
              iconname="login"
              onPress={(e) => {
                e.preventDefault();
                validationForm.handleSubmit();
              }}
              disabled={disable}
            />
          </View>
        </FadeInView>
      </ScrollView>

      <Text
        style={{
          fontFamily: "monst",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        Tracability-Collect App
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  textLogin: {
    fontFamily: "monst",
    fontSize: 28,
    marginTop: 5,
  },
  icone: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
