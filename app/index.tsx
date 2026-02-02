import { router, Stack } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
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
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/game-webview",
                params: { url: game.url, title: game.title },
              })
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              gap: 12,
            }}
            accessibilityRole="button"
            accessibilityLabel={`Play ${game.title}`}
          >
            <Image
              source={game.image}
              style={{ width: 60, height: 60, borderRadius: 8 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {game.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
