// BannerScroll.js
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

const BannerScroll = ({data}) => {
  if (!data || data.length === 0) {
    return <Text>No Banner Data</Text>;
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.bannerContainer}>
          <Image
            source={{uri: item.banner_image}}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginRight: 10,
  },
  bannerImage: {
    width: 200,
    height: 100,
  },
});

export default BannerScroll;
