import { useCallback, useRef } from "react";
import { ImpactFeedbackStyle } from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Button, FlatList } from "react-native";

import { FloatingButton } from "@components";
import { Word, ScreenProps } from "@typings";
import { triggerHapticFeedback } from "@utils";
import { COLORS, WINDOW_HEIGHT, WORDS } from "@constants";

import { styles } from "./HomeScreen.styles";
import { triggerSpeak } from "./HomeScreen.utils";

export const HomeScreen = () => {
  const flatListRef = useRef(null);
  const navigation = useNavigation<ScreenProps<"HomeScreen">["navigation"]>();

  const handleChallengeButtonPress = useCallback(() => {
    triggerHapticFeedback(ImpactFeedbackStyle.Soft);
    navigation.navigate("ChallengeScreen");
  }, [navigation]);

  const keyExtractor = useCallback((item: Word) => item.id, []);

  const getItemLayout = useCallback(
    (_data: ArrayLike<Word> | null | undefined, index: number) => ({
      length: WINDOW_HEIGHT,
      offset: WINDOW_HEIGHT * index,
      index,
    }),
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: Word }) => (
      <View style={styles.wordContainer}>
        <Text style={styles.word}>{item.word}</Text>
        <Text style={styles.pronunciation}>{item.pronunciation}</Text>
        <Text style={styles.definition}>{item.definition}</Text>
        <Text style={styles.example}>{item.example}</Text>
        <View style={styles.listenButtonView}>
          <Button
            title="Listen"
            color={COLORS.sunset}
            onPress={() => triggerSpeak(item.word)}
          />
        </View>
      </View>
    ),
    []
  );

  return (
    <>
      <FlatList
        data={WORDS}
        bounces={false}
        ref={flatListRef}
        horizontal={false}
        pagingEnabled={true}
        snapToAlignment="center"
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton title="🎯" onPress={handleChallengeButtonPress} />
    </>
  );
};
