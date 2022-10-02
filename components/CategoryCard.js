import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {...containerStyle}]}
      onPress={onPress}>
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{categoryItem.name}</Text>
        <Text style={styles.detail}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2,
  },
  detailsContainer: {
    width: '65%',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  name: {
    flex: 1,
    ...FONTS.h2,
  },
  detail: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export default CategoryCard;
