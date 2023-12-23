// TransactionScreen.js
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardRiwayatTrans, Gap, Header, SaldoCard} from '../../components';
import {COLORS} from '../../utils/Colors';
import {
  fetchTransaction,
  fetchTransactionHistory,
} from '../../store/transactionSlice';

const TransactionScreen = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const transactions = useSelector(state => state.transaction.data);
  const transactionHistory = useSelector(state => state.transaction.history);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    dispatch(fetchTransaction('TV'));
    dispatch(fetchTransactionHistory({offset, limit}));
  }, [dispatch, offset, limit]);

  const renderTransactionItem = ({item}) => (
    <CardRiwayatTrans
      nominal={`Rp. ${item.total_amount}`}
      tipeService={item.description}
      tanggalJam={item.created_on}
    />
  );

  const renderTransactionHistoryItem = ({item}) => (
    <CardRiwayatTrans
      nominal={`Rp. ${item.total_amount}`}
      tipeService={item.description}
      tanggalJam={item.created_on}
    />
  );

  const handleShowMore = () => {
    setOffset(offset + limit);
    setLimit(5);
  };

  return (
    <View style={styles.container}>
      <Header title={'Transaksi'} />
      <Gap height={10} />
      <SaldoCard saldo={balance} isBalanceVisible={true} />
      <Gap height={40} />
      <Text style={styles.textSection}>Transaksi</Text>
      <Gap height={20} />

      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={item => item.invoice_number}
      />

      <Gap height={20} />
      <Text style={styles.textSection}>Transaction History</Text>
      <Gap height={20} />

      <FlatList
        data={transactionHistory}
        renderItem={renderTransactionHistoryItem}
        keyExtractor={item => item.invoice_number}
      />

      <TouchableOpacity onPress={handleShowMore}>
        <Text style={styles.textShowMore}>Show More</Text>
      </TouchableOpacity>
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
