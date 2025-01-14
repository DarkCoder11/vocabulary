import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { ImpactFeedbackStyle } from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";

import { ScreenProps } from "@typings";
import { COLORS, IS_IOS, WORDS } from "@constants";
import { triggerHapticFeedback } from "@utils";

import { styles } from "./ChallengeScreen.styles";

export const ChallengeScreen = () => {
  const navigation = useNavigation<ScreenProps<"HomeScreen">["navigation"]>();

  const [answer, setAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [feedbackType, setFeedbackType] = useState<string>("");
  const [randomWord, setRandomWord] = useState<string | null>(null);

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    setRandomWord(WORDS[randomIndex].word);
  };

  useEffect(() => {
    generateRandomWord();
  }, []);

  const checkAnswer = useCallback(() => {
    if (answer.toLowerCase().includes(randomWord?.toLowerCase() as string)) {
      triggerHapticFeedback(ImpactFeedbackStyle.Medium);
      setFeedback(
        "🎉 Correct! You've used the word in your sentence perfectly!"
      );
      setFeedbackType("success");
      generateRandomWord();
      setAnswer("");
    } else {
      triggerHapticFeedback(ImpactFeedbackStyle.Heavy);
      setFeedback(
        "❌ Oops! Try again. Make sure your sentence includes the word."
      );
      setFeedbackType("error");
    }
  }, [answer, randomWord]);

  if (!randomWord) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading Challenge...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={IS_IOS ? "padding" : "height"}
    >
      {IS_IOS ? (
        <View style={styles.modalHandle} />
      ) : (
        <HeaderBackButton
          style={styles.backButton}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      )}
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Daily Challenge</Text>
        <Text style={styles.description}>
          Use the word <Text style={styles.word}>{randomWord}</Text> in a
          meaningful sentence.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type your sentence here..."
          placeholderTextColor={COLORS.caparol}
          value={answer}
          onChangeText={(text) => {
            setAnswer(text);
            setFeedback("");
            setFeedbackType("");
          }}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {feedback && (
          <Text
            style={[
              styles.feedback,
              feedbackType === "success"
                ? styles.successFeedback
                : styles.errorFeedback,
            ]}
          >
            {feedback}
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
