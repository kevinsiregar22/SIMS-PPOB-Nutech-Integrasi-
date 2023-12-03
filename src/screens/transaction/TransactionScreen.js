import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CardRiwayatTrans, Gap, Header, SaldoCard} from '../../components';
import {COLORS} from '../../utils/Colors';
const TransactionScreen = () => {
  const saldo = 12340;

  return (
    <View style={styles.container}>
      <Header title={'Transaksi'} />
      <Gap height={10} />
      <SaldoCard saldo={saldo} isBalanceVisible={true} />
      <Gap height={40} />
      <Text style={styles.textSection}>Transaksi</Text>
      <Gap height={20} />
      <CardRiwayatTrans
        nominal={'Rp. 500.000'}
        tipeService={'PDAM'}
        tanggalJam={'01 Sepetember 2023, 11.00 WIB'}
      />
      <CardRiwayatTrans
        nominal={'Rp. 500.000'}
        tipeService={'Pulsa'}
        tanggalJam={'01 Sepetember 2023, 11.00 WIB'}
      />
      <CardRiwayatTrans
        nominal={'Rp. 500.000'}
        tipeService={'Pulsa Prabayar'}
        tanggalJam={'01 Sepetember 2023, 11.00 WIB'}
      />
      <CardRiwayatTrans
        nominal={'Rp. 500.000'}
        tipeService={'Top Up Saldo'}
        tanggalJam={'01 Sepetember 2023, 11.00 WIB'}
      />
      <Gap height={24} />
      <Text style={styles.textShowMore}>Show More</Text>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  textSection: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textShowMore: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.red2,
    textAlign: 'center',
  },
});
