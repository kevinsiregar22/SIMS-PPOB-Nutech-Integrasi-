import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Images} from '../assets/images';
import {COLORS} from '../utils/Colors';

const SaldoCard = ({
  saldo,
  isBalanceVisible,
  toggleBalanceVisibility,
  showText,
}) => {
  const cardHeight = showText ? 140 : 100;

  const formattedSaldo = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(saldo);

  return (
    <ImageBackground
      source={Images.Bgsaldo}
      style={[styles.background, {height: cardHeight}]}
      borderRadius={10}>
      <View style={styles.containerBanner}>
        <Text style={styles.saldoText}>Saldo Anda,</Text>
        <Text style={styles.saldoRp}>
          {isBalanceVisible ? formattedSaldo : 'Rp •••••••'}
        </Text>
        {showText && (
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
        )}
      </View>
    </ImageBackground>
  );
};

export default SaldoCard;

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
