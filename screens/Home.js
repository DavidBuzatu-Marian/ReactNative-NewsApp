import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const Home = () => {
  const articles = [
    {
      id: 1,
      articleHeader: 'SpaceX sends Crew Dragon to ISS in a new mission',
      articleCover: images.spaceXMain,
      articleDescription: 'A text that no one is going to read anyway. YuHoo!',
      articlePublisher: 'Space',
      publicationDate: '2 hours ago',
    },
    {
      id: 2,
      articleHeader: 'Trump and America. Is it finally over?',
      articleCover: images.trumpMain,
      articleDescription: 'A text that no one is going to read anyway. YuHoo!',
      articlePublisher: 'York',
      publicationDate: '4 hours ago',
    },
  ];

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'flex-start',
          marginTop: SIZES.margin32,
        }}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h1, color: COLORS.black}}>Breaking News</Text>
        </View>
      </View>
    );
  };

  const renderArticlesSection = (articles) => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.padding,
          }}
          onPress={() => console.log('CLICKED NEWS')}>
          {/* News Cover  */}
          <View style={{flex: 1, width: 304, height: 496}}>
            <View style={{width: 304, height: 496}}>
              <Image
                source={item.articleCover}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 16,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                bottom: 0,
                width: 304,
                borderBottomEndRadius: 16,
                borderBottomStartRadius: 16,
                overflow: 'hidden',
              }}>
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
                blurType="dark"
                blurAmount={4}
                reducedTransparencyFallbackColor="white"
                // reducedTransparencyFallbackColor="white"
              />
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: SIZES.padding,
                  marginTop: SIZES.padding,
                }}>
                <Text style={{...FONTS.h2, color: COLORS.white}}>
                  {item.articleHeader}
                </Text>
                <Text
                  style={{
                    ...FONTS.body2,
                    color: COLORS.lightGray,
                    marginTop: SIZES.margin,
                  }}>
                  {item.articleDescription}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: SIZES.padding,
                  marginTop: SIZES.margin,
                  marginBottom: SIZES.margin,
                  position: 'absolute',
                  bottom: 0,
                }}>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.white,
                  }}>
                  {item.articlePublisher}
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                  }}>
                  {item.publicationDate}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={articles}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/* HeaderSection  */}
      <View style={{height: 80}}>{renderHeader()}</View>

      {/* Body Section */}
      <ScrollView style={{marginTop: SIZES.base}}>
        <View>{renderArticlesSection(articles)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
