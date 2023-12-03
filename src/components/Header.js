import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const Header = ({title}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={handleGoBack}>
        <Icon name={'arrow-left'} size={20} color={'black'} />
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    left: 60,
  },
});
