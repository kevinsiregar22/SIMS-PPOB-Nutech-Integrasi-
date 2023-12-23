import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {MyButton, Gap, Input, Link} from '../../components';
import {COLORS} from '../../utils/Colors';
import {navigate} from '../../routers/navigate';
import {loginUser} from '../../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = async values => {
    try {
      const response = await dispatch(loginUser(values));

      if (loginUser.fulfilled.match(response)) {
        const data = response.payload;
        await AsyncStorage.setItem('token', data.token);
        navigate('TabMain');
      } else {
        Alert.alert('Username atau password salah');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.header}>
              <Image
                source={require('../../assets/images/Logo.png')}
                style={styles.logo}
              />
              <Text style={styles.logoText}>SIMS PPOB</Text>
            </View>
            <Gap height={48} />
            <Text style={styles.introText}>
              Sign in or create an account {'\n'}to get started
            </Text>
            <Gap height={48} />
            <Input
              iconName="at"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Gap height={4} />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Gap height={24} />
            <Input
              placeholder="Enter your password"
              iconName="lock"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Gap height={4} />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Gap height={48} />
            <MyButton
              title={'Sign In'}
              bgColor={COLORS.red}
              onPress={handleSubmit}
            />
            <Gap height={48} />
            <View style={styles.linkContainer}>
              <Link label={"Don't have an account? Register"} />
              <Gap width={4} />
              <Link
                label={'here'}
                color={COLORS.red}
                onPress={() => navigate('Register')}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '800',
  },
  introText: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 30,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-end',
  },
});

export default LoginScreen;
