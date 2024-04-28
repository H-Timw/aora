import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserInfo = async (userInfo) => {
  try {
    await AsyncStorage.setItem(
      'user',
      JSON.stringify(userInfo),
    );
  } catch (error) {
    // Error saving data
  }
};
export const getUserInfo = async () => {
  try {
    const serializedUser = await AsyncStorage.getItem('user');
    if (serializedUser !== null) {
      return JSON.parse(serializedUser); // Convert string back to object
    }
  } catch (error) {
    console.error('Error retrieving user info:', error);
  }
  return null; // Indicate no user info found
};