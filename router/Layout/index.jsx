import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TabIcon from '../../components/TabIcon';
import { icons } from "../../constants";
import HomePage from '../../screens/HomePage';
import LoginPage from '../../screens/LoginPage';
import PageNotFound from '../../screens/PageNotFound';
import SignUpPage from '../../screens/SignUpPage';
import WelcomPage from '../../screens/WelcomePage';
import CreatePage from '../../screens/CreatePage';
import ProfilePage from '../../screens/ProfilePage';
import SavedPage from '../../screens/SavedPage';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPage = ({ navigation }) => {
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) navigation.navigate("Login");
  }, [user]);

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#FFA001",
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 84,
      },
      headerShown: false,
      title: route?.params?.name
    })}>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({ color, focused }) =>
          <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
      }} />
      <Tab.Screen name="Create" component={CreatePage} options={{
        tabBarIcon: ({ color, focused }) =>
          <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
      }} />
      <Tab.Screen name="Profile" component={ProfilePage} options={{
        tabBarIcon: ({ color, focused }) =>
          <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
      }} />
      <Tab.Screen name="Saved" component={SavedPage} options={{
        tabBarIcon: ({ color, focused }) =>
          <TabIcon icon={icons.bookmark} color={color} name="Saved" focused={focused} />
      }} />

      {/* <Tab.Screen name="PageNotFound" component={PageNotFound} /> */}
    </Tab.Navigator >
  )
}

const LayOut = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default LayOut