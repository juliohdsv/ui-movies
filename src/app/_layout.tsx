import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();

export default function Layout(){

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if(fontsLoaded){
    SplashScreen.hideAsync();
  }
  
  return(
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}/>
    </>
  )
}