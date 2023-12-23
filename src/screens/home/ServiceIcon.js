import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchServices,
  selectServiceData,
  selectServiceStatus,
} from '../../store/serviceSlice';
import {COLORS} from '../../utils/Colors';

const ServiceIcon = () => {
  const dispatch = useDispatch();
  const services = useSelector(selectServiceData);
  const servicesStatus = useSelector(selectServiceStatus);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (servicesStatus === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (servicesStatus === 'failed') {
    return <Text>Failed to fetch services</Text>;
  }

  const renderServiceItem = ({item}) => {
    let serviceNameToDisplay = item.service_name;

    const words = item.service_name.split(' ');
    if (words.length >= 2 && words[1] === 'Berlangganan') {
      serviceNameToDisplay = words[0];
    } else if (words.length >= 2) {
      serviceNameToDisplay = words[1];
    }
    return (
      <TouchableOpacity style={styles.serviceContainer}>
        <Image source={{uri: item.service_icon}} style={styles.serviceIcons} />
        <Text style={styles.serviceLabel}>{serviceNameToDisplay}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={services}
      renderItem={renderServiceItem}
      keyExtractor={item => item.service_code}
      numColumns={6}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    // backgroundColor: COLORS.black,
  },
  serviceContainer: {
    alignItems: 'center',
    paddingVertical: 15,
    padding: 6,
  },
  serviceIcons: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  serviceLabel: {
    textAlign: 'center',
  },
});

export default ServiceIcon;
