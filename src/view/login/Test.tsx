import React, { useRef } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import ScrollReveal from "../../components/formelement/ScrollReveal";

const data = [
  "React",
  "Node",
  "Expo",
  "Flutter",
  "Django",
  "Vue.js",
  "Angular",
  "Svelte",
  "Laravel",
  "Rails",
  "Spring",
  "Express",
  "Next.js",
  "Nuxt.js",
  "Ember.js",
  "Backbone.js",
  "Meteor",
  "Ionic",
  "Cordova",
  "Xamarin",
  "React Native",
  "SwiftUI",
  "Kotlin",
  "Java",
  "C#",
  "Python",
  "Ruby",
  "PHP",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React Native",
  "Flutter",
  "Ionic",
  "Xamarin",
  "SwiftUI",
  "Kotlin",
  "Java",
];

export default function Screen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <ScrollView>
        {data.map((item, index) => (
          <ScrollReveal
            key={index}
            once={true} // <-- animation à chaque scroll
            delay={index * 50} // cascade
            effect="slide" // slide, fade, zoom-in, zoom-out
            direction={index % 2 === 0 ? "right" : "left"}
            style={{ margin: 10 }}
          >
            <Text
              style={{
                backgroundColor: "#4f46e5",
                color: "white",
                padding: 20,
                borderRadius: 12,
              }}
            >
              {item}
            </Text>
          </ScrollReveal>
        ))}
      </ScrollView>
    </View>
  );
}
