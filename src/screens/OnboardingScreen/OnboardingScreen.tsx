import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Layout,
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";
import { ImpactFeedbackStyle } from "expo-haptics";
import { useNavigation } from "@react-navigation/native";

import { useStorage } from "@hooks";
import { ScreenProps } from "@typings/screens.types";
import { ONBOARDING_STEPS } from "./OnboardingScreen.const";
import { styles } from "./OnboardingScreen.styles";
import { ONBOARDING_BACKGROUND_IMAGE } from "../../../assets";
import { triggerHapticFeedback } from "@utils";

export const OnboardingScreen = () => {
  const { setItem } = useStorage();
  const navigation =
    useNavigation<ScreenProps<"OnboardingScreen">["navigation"]>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const proceedToNextStep = useCallback(() => {
    if (currentStep >= ONBOARDING_STEPS.length - 1) {
      setItem("onboardingComplete", true);
      triggerHapticFeedback(ImpactFeedbackStyle.Medium);
      navigation.replace("HomeScreen");
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
    triggerHapticFeedback(ImpactFeedbackStyle.Light);
  }, [currentStep, navigation, setItem]);

  const proceedToLastStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={ONBOARDING_BACKGROUND_IMAGE}
    >
      <SafeAreaView style={styles.layout}>
        <View>
          <Text style={styles.title}>World Of Words</Text>
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutLeft}
            layout={Layout.springify()}
            key={currentStep}
          >
            <Text style={styles.stepText}>{ONBOARDING_STEPS[currentStep]}</Text>
          </Animated.View>
        </View>
        <View style={styles.ctaWrapper}>
          {currentStep !== 0 && (
            <Animated.View
              entering={FadeInRight}
              exiting={FadeOutLeft}
              layout={Layout.springify()}
              style={styles.buttonContainer}
            >
              <TouchableOpacity
                style={[styles.cta, styles.backButton]}
                onPress={proceedToLastStep}
              >
                <Text style={styles.ctaText}>Back</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutLeft}
            layout={Layout.springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              style={[
                styles.cta,
                currentStep === 0 ? styles.fullWidthCta : styles.nextButton,
              ]}
              onPress={proceedToNextStep}
            >
              <Text style={styles.ctaText}>
                {currentStep < ONBOARDING_STEPS.length - 1
                  ? "Next"
                  : "Start Learning"}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
