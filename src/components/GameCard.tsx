import { Image, Pressable, Text, View } from "react-native";
import { Game } from "../types/Game";

type Props = {
  game: Game;
  onPress: () => void;
};

export function GameCard({ game, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        gap: 12,
      }}
      accessibilityRole="button"
      accessibilityLabel={`Play ${game.title}`}
    >
      <Image
        source={game.image}
        style={{ width: 60, height: 60, borderRadius: 8 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{game.title}</Text>
      </View>
    </Pressable>
  );
}
