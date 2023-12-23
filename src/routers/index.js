import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {selectToken, clearToken, setToken} from '../store/authSlice';
import {navigationRef} from '../routers/navigate';
import StackScreen from './StackScreen';
import BottomTab from './BottomTab';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  console.log('tokennnnn : ', token);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        console.log('storedToken:', storedToken);

        if (storedToken) {
          dispatch(setToken({token: storedToken}));
        } else {
          dispatch(clearToken());
        }
      } catch (error) {
        console.error('Error checking authentication:', error.message);
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [dispatch]);

  return authChecked ? (
    <NavigationContainer ref={navigationRef}>
      {token ? <BottomTab /> : <StackScreen />}
    </NavigationContainer>
  ) : null;
};

export default RootNavigator;
