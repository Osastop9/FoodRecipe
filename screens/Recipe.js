import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {FONTS, SIZES, COLORS, icons} from '../constants';

const HEADER_HEIGHT = 350;

const Recipe = () => {
  return (
    <View style={styles.container}>
      <Text>Recipe</Text>
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default Recipe;
