import { Stack } from "expo-router";
import '../css/style.css'
import RouteGuard from "./RouteGuard";
import ThemeProvider from "@/themes/ThemeProvider";

export default function RootLayout() {
  return <ThemeProvider>
    <RouteGuard>
      <Stack screenOptions={{contentStyle: {marginHorizontal: 8}}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      </Stack>
    </RouteGuard>
  </ThemeProvider>
}
