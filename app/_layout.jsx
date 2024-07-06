import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen,Slot,Stack } from 'expo-router';
import { Header } from 'react-native/Libraries/NewAppScreen';
import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
"Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),

  })

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded&&!error) return null;

    return (<Stack>
<Stack.Screen name="index" options={{headerShown:false}}/>


  </Stack>)
}

export default RootLayout

