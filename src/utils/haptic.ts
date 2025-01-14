import * as Haptics from "expo-haptics";

export const triggerHapticFeedback = (
  style = Haptics.ImpactFeedbackStyle.Medium
) => {
  Haptics.impactAsync(style);
};
