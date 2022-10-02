import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footer: {marginBottom: 100},
});

export default Home;
