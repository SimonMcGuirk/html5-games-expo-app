import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function GameWebview() {
  const { url, title } = useLocalSearchParams();
  const urlString = typeof url === "string" ? url : "";
  const titleString = typeof title === "string" ? title : "Game";

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: titleString }} />
      <WebView
        source={{ uri: urlString }}
        style={{ flex: 1 }}
        accessibilityLabel={`Webview for ${titleString}`}
        startInLoadingState={true}
      />
    </View>
  );
}
