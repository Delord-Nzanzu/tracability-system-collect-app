import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  ViewStyle,
  StyleProp,
  LayoutChangeEvent,
} from "react-native";

type Direction = "left" | "right" | "top" | "bottom";
type Effect = "slide" | "fade" | "zoom-in" | "zoom-out";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  effect?: Effect;
  once?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function ScrollReveal({
  children,
  direction = "bottom",
  distance = 40,
  duration = 800,
  delay = 0,
  effect = "slide",
  once = true,
  style,
}: ScrollRevealProps) {
  const opacity = useRef(new Animated.Value(effect === "fade" ? 0 : 1)).current;
  const translate = useRef(new Animated.Value(distance)).current;
  const scale = useRef(
    new Animated.Value(
      effect === "zoom-in" ? 0.8 : effect === "zoom-out" ? 1.2 : 1
    )
  ).current;

  const hasPlayed = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  const onLayout = (e: LayoutChangeEvent) => {
    if (!isVisible) setIsVisible(true);
  };

  const getTransform = () => {
    const transforms: any[] = [];

    if (effect === "slide") {
      if (direction === "left" || direction === "right") {
        transforms.push({
          translateX: direction === "left" ? -translate : translate,
        });
      } else {
        transforms.push({
          translateY: direction === "top" ? -translate : translate,
        });
      }
    }

    if (effect === "zoom-in" || effect === "zoom-out") {
      transforms.push({ scale });
    }

    return transforms;
  };

  useEffect(() => {
    if (!isVisible) return;
    if (once && hasPlayed.current) return;

    hasPlayed.current = true;

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
  }, [isVisible]);

  return (
    <Animated.View
      onLayout={onLayout}
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
