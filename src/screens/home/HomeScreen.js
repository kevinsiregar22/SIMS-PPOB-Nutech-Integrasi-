import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../utils/Colors';
import {Images} from '../../assets/images';
import {Gap, SaldoCard} from '../../components';
import ServiceIcon from './ServiceIcon';
import BannerScroll from './BannerScroll';
import {navigate} from '../../routers/navigate';
import {selectToken} from '../../store/authSlice';
import {
  fetchBannerDataWithToken,
  selectBannerData,
} from '../../store/bannerSlice';
import {fetchServices} from '../../store/serviceSlice';
import {
  selectUserProfile,
  fetchUserProfileWithToken,
} from '../../store/userProfileSlice';
import {fetchBalance} from '../../store/balanceSlice';

const HomeScreen = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const balance = useSelector(state => state.balance.value);
  const bannerData = useSelector(selectBannerData);
  const userProfile = useSelector(selectUserProfile);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        await dispatch(fetchUserProfileWithToken(token));
        await dispatch(fetchBannerDataWithToken(token));
        await dispatch(fetchServices());
        await dispatch(fetchBalance(token));
      }
    };

    fetchData();
  }, [dispatch, token]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Image source={Images.Logo} style={styles.logo} />
          <Text style={styles.logoText}>SIMS PPOB</Text>
        </View>
        <TouchableOpacity onPress={() => navigate('Akun')}>
          <Image source={Images.Profile2} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <Gap height={24} />
      <Text style={styles.welcomeText}>Selamat Datang,</Text>
      <Text style={styles.nameText}>
        {userProfile?.first_name} {userProfile?.last_name}
      </Text>
      <Gap height={24} />
      <SaldoCard
        saldo={balance}
        isBalanceVisible={isBalanceVisible}
        toggleBalanceVisibility={toggleBalanceVisibility}
        showText={true}
      />
      <Gap height={14} />
      <ServiceIcon />
      <Gap height={6} />
      <Text>Temukan Promo Menarik</Text>
      <Gap height={14} />
      <BannerScroll data={bannerData} />
    </SafeAreaView>
  );
};

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

export default HomeScreen;
