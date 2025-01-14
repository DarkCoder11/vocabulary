import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { CompositeScreenProps } from "@react-navigation/native";

export type AppScreens = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  ChallengeScreen: undefined;
};

export type ScreenProps<TScreen extends keyof AppScreens> =
  CompositeScreenProps<
    NativeStackScreenProps<AppScreens, TScreen>,
    NativeStackScreenProps<AppScreens>
  >;
