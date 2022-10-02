import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const RecipeCardDetails = ({recipeItem}) => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsContainerView}>
        <Text style={styles.detailText}>{recipeItem.name}</Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={styles.bookmarkIcon}
        />
      </View>
      <Text style={styles.durationText}>
        {recipeItem.duration} | {recipeItem.serving} Serving
      </Text>
    </View>
  );
};

const RecipeCardInfo = ({recipeItem}) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView blurType="dark" style={styles.recipeCardContainer}>
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    );
  } else {
    return (
      <View
        blurType="dark"
        style={{
          ...styles.recipeCardContainer,
          backgroundColor: COLORS.transparentDarkGray,
        }}>
        <RecipeCardDetails recipeItem={recipeItem} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
  detailsContainer: {flex: 1},
  detailsContainerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    width: '70%',
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
    tintColor: COLORS.darkGreen,
  },
  durationText: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
});

export default RecipeCardInfo;
