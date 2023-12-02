import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, MyButton, Link, Gap} from '../../components';
import {Images} from '../../assets/images';
import {COLORS} from '../../utils/Colors';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.Logo} style={styles.logo} />
        <Text style={styles.logoText}>SIMS PPOB</Text>
      </View>
      <Gap height={30} />
      <Text style={styles.introText}>
        Lengkapi data untuk {'\n'}membuat akun
      </Text>
      <Gap height={30} />
      <Input iconName="at" placeholder="masukkan email anda" />
      <Gap height={14} />
      <Input placeholder="nama depan" iconName="user" />
      <Gap height={14} />
      <Input placeholder="nama belakang" iconName="user" />
      <Gap height={14} />
      <Input
        placeholder="buat password"
        iconName="lock"
        secureTextEntry={Icon}
      />
      <Gap height={14} />
      <Input
        placeholder="konfirmasi password"
        iconName="lock"
        secureTextEntry={Icon}
      />
      <Gap height={30} />
      <MyButton title={'Registrasi'} bgColor={COLORS.red} />
      <Gap height={24} />
      <View style={styles.linkContainer}>
        <Link label={'Sudah punya akun ? login'} />
        <Gap width={4} />
        <Link
          label={'disini'}
          color={COLORS.red}
          onPress={() => navigation.navigate('Login')}
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
    paddingTop: 30,
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

export default RegisterScreen;
