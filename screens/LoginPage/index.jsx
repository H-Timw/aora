import React from 'react';
import { Button, View } from 'react-native';
import { setUserInfo } from '../../utils/commond';
import { userActions } from '../../reducer/userReducer';
import { useDispatch } from 'react-redux';

const username = "timw05122001@gmail.com";
const password = "admin123";

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    setUserInfo({ name: "Timw", age: "18" });
    dispatch(userActions.updateUserInfo({ name: "Timw", age: "18" }));
    navigation.navigate('MainPage');
  }
  return (
    <View>
      <Button title="Login" onPress={() => onSuccess()} />
    </View>
  )
}

export default LoginPage