import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardTopUpSaldo,
  Gap,
  Header,
  Input,
  MyButton,
  SaldoCard,
} from '../../components';
import {COLORS} from '../../utils/Colors';
import {fetchBalance} from '../../store/balanceSlice';
import {topupAmount} from '../../store/topupSlice';
import {setBalance} from '../../store/setBalanceSlice';

const TopUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [topUpAmount, setTopUpAmount] = useState('');
  const balance = useSelector(state => state.balance.value);

  const handleInputChange = value => {
    setTopUpAmount(value);
  };

  useEffect(() => {
    setTopUpAmount('');
  }, [balance]);

  const handleTopUp = async () => {
    const amount = parseInt(topUpAmount);

    if (amount < 10000 || amount > 1000000) {
      Alert.alert(
        'Gagal',
        'Nominal top-up harus antara Rp. 10.000 dan Rp. 1.000.000',
      );
    } else {
      try {
        await dispatch(topupAmount(amount));
        dispatch(fetchBalance());
        dispatch(setBalance(balance + amount));
        Alert.alert('Sukses', `Top-up sejumlah Rp. ${amount} berhasil!`);
      } catch (error) {
        Alert.alert('Gagal', 'Top-up gagal. Silakan coba lagi.');
      }
    }
  };

  const handleCardTopUpPress = price => {
    setTopUpAmount(price.replace('Rp. ', '').replace('.', ''));
  };

  const buttonColor = topUpAmount.trim() === '' ? COLORS.gray : COLORS.red;

  useEffect(() => {
    setTopUpAmount('');
  }, [balance]);

  return (
    <View
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title={'Top Up'} />
      <Gap height={10} />
      <View style={styles.cardShowSaldo}>
        <SaldoCard saldo={balance} isBalanceVisible={true} />
      </View>
      <Gap height={40} />

      <Text style={styles.textInfo}>Silakan masukkan</Text>
      <Text style={styles.textInfo2}>nominal Top Up</Text>

      <Gap height={40} />

      <Input
        placeholder={'Masukkan nominal Top Up'}
        iconName={'money-check'}
        size={14}
        keyboardType={'numeric'}
        onChangeText={handleInputChange}
        value={topUpAmount}
      />

      <Gap height={30} />
      <View style={styles.saldoTopUpCard}>
        <CardTopUpSaldo
          price={'Rp. 10.000'}
          onPress={() => handleCardTopUpPress('Rp. 10.000')}
        />
        <CardTopUpSaldo
          price={'Rp. 20.000'}
          onPress={() => handleCardTopUpPress('Rp. 20.000')}
        />
        <CardTopUpSaldo
          price={'Rp. 50.000'}
          onPress={() => handleCardTopUpPress('Rp. 50.000')}
        />
      </View>
      <Gap height={20} />

      <View style={styles.saldoTopUpCard}>
        <CardTopUpSaldo
          price={'Rp. 100.000'}
          onPress={() => handleCardTopUpPress('Rp. 100.000')}
        />
        <CardTopUpSaldo
          price={'Rp. 250.000'}
          onPress={() => handleCardTopUpPress('Rp. 250.000')}
        />
        <CardTopUpSaldo
          price={'Rp. 500.000'}
          onPress={() => handleCardTopUpPress('Rp. 500.000')}
        />
      </View>
      <Gap height={40} />

      <MyButton
        title={'Top Up'}
        bgColor={buttonColor}
        onPress={handleTopUp}
        disabled={topUpAmount.trim() === ''}
      />
    </View>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  cardShowSaldo: {},
  textInfo: {
    fontSize: 14,
    fontWeight: '400',
  },
  textInfo2: {
    fontSize: 18,
    fontWeight: '600',
  },
  saldoTopUpCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
