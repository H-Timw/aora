import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './reducer/store';
import LayOut from './router/Layout';

export default function App() {
  const [fontLoaded, error] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [fontLoaded, error]);

  return (
    <Provider store={store}>
      {fontLoaded ?
        <LayOut />
        : (<View className="flex-1 items-center justify-center bg-white" >
          <Text className="text-red-600" > Loading Font, Set BackDrop here or some thing</Text >
          <StatusBar style="auto" />
        </View >)
      }
    </Provider>
  );
}
