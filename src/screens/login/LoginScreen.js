import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, MyButton, Link, Gap} from '../../components';
import {Images} from '../../assets/images';
import {COLORS} from '../../utils/Colors';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.Logo} style={styles.logo} />
        <Text style={styles.logoText}>SIMS PPOB</Text>
      </View>
      <Gap height={48} />
      <Text style={styles.introText}>
        Masuk atau buat akun {'\n'}untuk memulai
      </Text>
      <Gap height={48} />
      <Input iconName="at" placeholder="masukkan email anda" />
      <Gap height={24} />
      <Input
        placeholder="masukkan password anda"
        iconName="lock"
        secureTextEntry={Icon}
      />
      <Gap height={48} />
      <MyButton
        title={'Masuk'}
        bgColor={COLORS.red}
        onPress={() => navigation.navigate('TabMain')}
      />
      <Gap height={48} />
      <View style={styles.linkContainer}>
        <Link label={'Belum punya akun ? registrasi'} />
        <Gap width={4} />
        <Link
          label={'disini'}
          color={COLORS.red}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
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
});

export default LoginScreen;
