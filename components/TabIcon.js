import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const TabIcon = ({icon, focused}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />
      {focused && <View style={styles.bottomFocus} />}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomFocus: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLORS.darkGreen,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 50,
  },
});

export default TabIcon;
