import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../utils/Colors';
import {Images} from '../../assets/images';
import {Gap} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <ImageBackground
        source={Images.Bgsaldo}
        style={styles.background}
        borderRadius={10}>
        <View style={styles.containerBanner}>
          <Text style={styles.saldoText}>Saldo Anda,</Text>
          <Text style={styles.saldoRp}>
            {isBalanceVisible ? `Rp. ${saldo}` : 'Rp •••••••'}
          </Text>
          <View style={styles.lihatSaldoContainer}>
            <Text style={styles.lihatSaldoText}>
              {isBalanceVisible ? 'Sembunyikan Saldo' : 'Lihat Saldo'}
            </Text>

            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Icon
                name={isBalanceVisible ? 'eye-slash' : 'eye'}
                size={20}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <Gap height={14} />

      <ServiceIcon data={[dummyServices.slice(0, 6)]} />
      <ServiceIcon data={[dummyServices.slice(6, 12)]} />
      <Gap height={6} />
      <Text style={styles.sectionTitle}>Temukan Promo Menarik</Text>
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
  background: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  containerBanner: {
    flex: 1,
    padding: 16,
  },
  saldoText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  saldoRp: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '600',
    paddingVertical: 14,
  },
  lihatSaldoContainer: {
    flexDirection: 'row',
  },
  lihatSaldoText: {
    color: COLORS.white,
    marginRight: 8,
  },
});
