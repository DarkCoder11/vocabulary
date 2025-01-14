import * as Speech from "expo-speech";
import { ImpactFeedbackStyle } from "expo-haptics";

import { triggerHapticFeedback } from "@utils";

export const triggerSpeak = (text: string) => {
  triggerHapticFeedback(ImpactFeedbackStyle.Light);
  Speech.speak(text);
};
