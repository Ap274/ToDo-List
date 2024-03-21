import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen"

import { Home } from "./src/screens/Home";

import { 
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  } else {
    return
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  )
}
