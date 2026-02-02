import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => router.push("/game-webview")}
        accessibilityRole="button"
      >
        <Text>Go to Game</Text>
      </Pressable>
    </View>
  );
}
