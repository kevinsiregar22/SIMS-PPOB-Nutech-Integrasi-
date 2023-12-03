import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../utils/Colors';
import {Images} from '../../assets/images';
import {Gap, SaldoCard} from '../../components';
import {dummyServices} from './dummyServices';
import ServiceIcon from './ServiceIcon';
import {dummyBanner} from './dummyBanner';
import BannerScroll from './BannerScroll';
const HomeScreen = ({navigation}) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const saldo = 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Image source={Images.Logo} style={styles.logo} />
          <Text style={styles.logoText}>SIMS PPOB</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
          <Image source={Images.Profile2} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <Gap height={24} />
      <Text style={styles.welcomeText}>Selamat Datang,</Text>
      <Text style={styles.nameText}>Simon Kevin Siregar</Text>
      <Gap height={24} />
      <SaldoCard
        saldo={saldo}
        isBalanceVisible={isBalanceVisible}
        toggleBalanceVisibility={toggleBalanceVisibility}
        showText={true}
      />

      <Gap height={14} />

      <ServiceIcon data={[dummyServices.slice(0, 6)]} />
      <ServiceIcon data={[dummyServices.slice(6, 12)]} />
      <Gap height={6} />
      <Text>Temukan Promo Menarik</Text>
      <Gap height={14} />
      <BannerScroll data={dummyBanner} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '800',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 30,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 30,
  },
});
