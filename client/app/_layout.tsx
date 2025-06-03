import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerTitle:""}}>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(app)" options={{headerShown: true, headerTitle: ""}} />
    </Stack>
  );
}
