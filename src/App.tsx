import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useStorage } from "@hooks";
import { HomeScreen, ChallengeScreen, OnboardingScreen } from "@screens";
import { MAIN_FONT } from "../assets";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({ PlayFair: MAIN_FONT });
  const { getItem } = useStorage();
  const [initialRoute, setInitialRoute] = useState<
    "HomeScreen" | "OnboardingScreen" | null
  >(null);

  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      const onboardingComplete = await getItem("onboardingComplete");

      setInitialRoute(onboardingComplete ? "HomeScreen" : "OnboardingScreen");
    };

    fetchOnboardingStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps --- Unnecessary deps getItem it won't be changed
  }, []);

  if (!loaded || initialRoute === null) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ChallengeScreen"
            component={ChallengeScreen}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
