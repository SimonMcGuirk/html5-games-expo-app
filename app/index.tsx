import { router, Stack } from "expo-router";
import { FlatList, View } from "react-native";
import { GameCard } from "../src/components/GameCard";
import { games } from "../src/data/games";
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Games" }} />
      <FlatList
        data={games}
        keyExtractor={(game) => game.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item: game }) => (
          <GameCard
            game={game}
            onPress={() =>
              router.push({
                pathname: "/game-webview",
                params: { url: game.url, title: game.title },
              })
            }
          />
        )}
      />
    </View>
  );
}
