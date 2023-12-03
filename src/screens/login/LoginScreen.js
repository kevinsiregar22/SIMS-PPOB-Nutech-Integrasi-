import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, MyButton, Link, Gap} from '../../components';
import {Images} from '../../assets/images';
import {COLORS} from '../../utils/Colors';
import {navigate} from '../../routers/navigate';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Format email tidak valid')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Format email tidak valid',
    )
    .required('Email wajib diisi'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password wajib diisi'),
});

const LoginScreen = () => {
  const handleLogin = values => {
    navigate('TabMain');
    // console.log(values);
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
              <Image source={Images.Logo} style={styles.logo} />
              <Text style={styles.logoText}>SIMS PPOB</Text>
            </View>
            <Gap height={48} />
            <Text style={styles.introText}>
              Masuk atau buat akun {'\n'}untuk memulai
            </Text>
            <Gap height={48} />
            <Input
              iconName="at"
              placeholder="Masukkan email Anda"
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
              placeholder="Masukkan password Anda"
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
              title={'Masuk'}
              bgColor={COLORS.red}
              onPress={handleSubmit}
            />
            <Gap height={48} />
            <View style={styles.linkContainer}>
              <Link label={'Belum punya akun? Registrasi'} />
              <Gap width={4} />
              <Link
                label={'disini'}
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
