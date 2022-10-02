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
import CategoryCard from '../components/CategoryCard';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>
            Hello Isaac,
          </Text>
          <Text style={{marginTop: 3, color: COLORS.gray, ...FONTS.body3}}>
            What do you want to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipes"
        />
      </View>
    );
  }

  function renderSeeRecipesCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}></View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {renderSeeRecipesCard()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={styles.category}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
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
  category: {marginHorizontal: SIZES.padding},
  footer: {marginBottom: 100},
});

export default Home;
