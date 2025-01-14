import { TouchableOpacity, Text } from "react-native";

import { styles } from "./FloatingButton.styles";
import { FloatingButtonProps } from "./FloatingButton.props";

export const FloatingButton = ({ title, onPress }: FloatingButtonProps) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
