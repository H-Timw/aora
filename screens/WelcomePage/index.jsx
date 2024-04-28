import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../reducer/userReducer';
import { getUserInfo } from '../../utils/commond';

const WelcomPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) getUser();
    else navigation.navigate("MainPage");
  }, [user]);

  const getUser = async () => {
    dispatch(
      userActions.updateUserInfo(await getUserInfo())
    );
  }
  return (
    <View>
      <Button title="Continue with Email" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default WelcomPage