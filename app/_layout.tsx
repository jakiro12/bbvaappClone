import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';



export default function RootLayout() {
  

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home/home" options={{ headerShown: false }} />
        <Stack.Screen name="home/transfer/transfer" options={{ headerShown: false,animation:'slide_from_bottom',animationDuration:1000}} />
        <Stack.Screen name="+not-found" />
        <StatusBar style="auto" />
      </Stack> 
  );
}
