import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ServiceIcon = ({data}) => {
  return (
    <View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.container}>
          {row.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceContainer}>
              <Image
                source={{uri: service.service_icon}}
                style={styles.serviceIcons}
              />
              <Text style={styles.serviceLabel}>{service.service_tariff}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  serviceContainer: {
    alignItems: 'center',
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
