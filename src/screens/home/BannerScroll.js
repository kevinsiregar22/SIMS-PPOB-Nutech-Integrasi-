import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';

const BannerScroll = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={styles.bannerContainer}>
          <Image
            source={{uri: item.banner_image}}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>
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
