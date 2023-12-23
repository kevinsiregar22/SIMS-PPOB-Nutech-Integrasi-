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
    .required('Email wajib diisi'),
  firstName: Yup.string().required('Nama depan wajib diisi'),
  lastName: Yup.string().required('Nama belakang wajib diisi'),
  password: Yup.string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password wajib diisi'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Konfirmasi password tidak sesuai')
    .required('Konfirmasi password wajib diisi'),
});

const RegisterScreen = () => {
  const handleRegistration = async values => {
    try {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/registration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName,
            password: values.password,
          }),
        },
      );

      const data = await response.json();
      console.log('data : ', data);

      if (data.status === 0) {
        navigate('Login');
      } else {
        console.error('Registration failed:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegistration}>
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
            <Gap height={30} />
            <Text style={styles.introText}>
              Lengkapi data untuk {'\n'}membuat akun
            </Text>
            <Gap height={30} />
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
            <Gap height={14} />
            <Input
              placeholder="Nama depan"
              iconName="user"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            <Gap height={4} />

            {touched.firstName && errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}
            <Gap height={14} />
            <Input
              placeholder="Nama belakang"
              iconName="user"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            <Gap height={4} />
            {touched.lastName && errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}
            <Gap height={14} />
            <Input
              placeholder="Buat password"
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
            <Gap height={14} />
            <Input
              placeholder="Konfirmasi password"
              iconName="lock"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
            <Gap height={30} />
            <MyButton
              title={'Registrasi'}
              bgColor={COLORS.red}
              onPress={handleSubmit}
            />
            <Gap height={24} />
            <View style={styles.linkContainer}>
              <Link label={'Sudah punya akun ? login'} />
              <Gap width={4} />
              <Link
                label={'disini'}
                color={COLORS.red}
                onPress={() => navigate('Login')}
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
    paddingTop: 20,
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

export default RegisterScreen;
