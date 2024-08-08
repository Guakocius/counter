import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'First React Native App with Flutter Second Try'}} />
    </Stack>
  );
}
