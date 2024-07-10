import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import ProductsProvider from '@/context/cart-context';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    MonumentRegular: require('../assets/fonts/MonumentExtended-Regular.ttf'),
    MonumentUltraBold: require('../assets/fonts/MonumentExtended-Ultrabold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ProductsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="product" />
      </Stack>
    </ProductsProvider>
  );
}
