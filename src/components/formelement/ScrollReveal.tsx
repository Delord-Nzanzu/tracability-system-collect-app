import React, { useRef, useEffect, useState } from "react";
import { Animated, View, ViewStyle, StyleProp, Dimensions } from "react-native";

type Direction = "left" | "right" | "top" | "bottom";
type Effect = "slide" | "fade" | "zoom-in" | "zoom-out";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number; // en ms
  delay?: number; // en ms
  effect?: Effect;
  once?: boolean; // true = une seule fois, false = à chaque scroll
  style?: StyleProp<ViewStyle>;
}

export default function ScrollReveal({
  children,
  direction = "bottom",
  distance = 40,
  duration = 500,
  delay = 0,
  effect = "slide",
  once = false,
  style,
}: ScrollRevealProps) {
  const windowHeight = Dimensions.get("window").height;

  const opacity = useRef(new Animated.Value(effect === "fade" ? 0 : 1)).current;
  const translate = useRef(new Animated.Value(distance)).current;
  const scale = useRef(
    new Animated.Value(
      effect === "zoom-in" ? 0.8 : effect === "zoom-out" ? 1.2 : 1
    )
  ).current;

  const viewRef = useRef<View>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reset si once=false
  const resetAnimation = () => {
    if (!once) {
      opacity.setValue(effect === "fade" ? 0 : 1);
      translate.setValue(distance);
      scale.setValue(
        effect === "zoom-in" ? 0.8 : effect === "zoom-out" ? 1.2 : 1
      );
      setIsVisible(false);
    }
  };

  const playAnimation = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!once) resetAnimation();
    });
  };

  const checkVisibility = () => {
    if (!viewRef.current) return;

    viewRef.current.measure((x, y, width, height, pageX, pageY) => {
      if (pageY + height > 0 && pageY < windowHeight) {
        if (!isVisible) {
          setIsVisible(true);
          playAnimation();
        }
      } else {
        if (!once) setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(checkVisibility, 100); // vérifie toutes les 100ms
    return () => clearInterval(interval);
  }, [isVisible]);

  const getTransform = () => {
    const transforms: any[] = [];
    if (effect === "slide") {
      if (direction === "left" || direction === "right") {
        transforms.push({
          translateX:
            direction === "left"
              ? translate.interpolate({
                  inputRange: [0, distance],
                  outputRange: [0, -distance],
                })
              : translate.interpolate({
                  inputRange: [0, distance],
                  outputRange: [0, distance],
                }),
        });
      } else {
        transforms.push({
          translateY:
            direction === "top"
              ? translate.interpolate({
                  inputRange: [0, distance],
                  outputRange: [0, -distance],
                })
              : translate.interpolate({
                  inputRange: [0, distance],
                  outputRange: [0, distance],
                }),
        });
      }
    }

    if (effect === "zoom-in" || effect === "zoom-out") {
      transforms.push({ scale });
    }

    return transforms;
  };

  return (
    <Animated.View
      ref={viewRef}
      style={[
        {
          opacity: effect === "fade" ? opacity : 1,
          transform: getTransform(),
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
}
