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

const LineDivider = () => {
  return (
    <View
      style={{
        height: 3,
        backgroundColor: COLORS.blue,
        alignSelf: 'stretch',
      }}></View>
  );
};

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

  const news = [
    {
      id: 1,
      newsHeader: 'iPhone 12Pro. What is takes to be a pro?',
      newsCategory: ['Technology, Business'],
      publicationDate: '3 Nov 2020',
      views: 3000,
      newsCover: images.appleMain,
    },
    {
      id: 2,
      newsHeader: 'COVID Strikes Again. Are you ready for the next wave?',
      newsCategory: ['Technology, Culture'],
      publicationDate: '3 Jan 2021',
      views: 432000,
      newsCover: images.covidMain,
    },
    {
      id: 3,
      newsHeader: 'GOAL!!! A young man celebrates',
      newsCategory: ['Sport'],
      publicationDate: '13 Jan 2021',
      views: 1023,
      newsCover: images.sportMain,
    },
    {
      id: 4,
      newsHeader: 'Bernie Sanders wins the internet. See how here',
      newsCategory: ['Culture'],
      publicationDate: '24 Jan 2021',
      views: 100023,
      newsCover: images.bernieMain,
    },
    {
      id: 5,
      newsHeader: 'Trump. Trump. All Trump',
      newsCategory: ['Culture, Business'],
      publicationDate: '23 Jan 2021',
      views: 70234,
      newsCover: images.trumpMain,
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Technology',
      news: [news[0], news[1]],
    },
    {
      id: 2,
      categoryName: 'Sport',
      news: [news[2]],
    },
    {
      id: 3,
      categoryName: 'Culture',
      news: [news[1], news[3], news[4]],
    },
    {
      id: 4,
      categoryName: 'Business',
      news: [news[0], news[4]],
    },
  ];

  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategoy] = React.useState(1);

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

  const renderCategoryHeader = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategoy(item.id)}>
          {selectedCategory == item.id ? (
            <Text style={{...FONTS.h2, color: COLORS.blue}}>
              {item.categoryName}
            </Text>
          ) : (
            <Text style={{...FONTS.h2, color: COLORS.lightGray}}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{flex: 1, marginLeft: SIZES.padding, marginTop: SIZES.margin32}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  };

  const renderCategoryData = () => {
    let _news = [];
    let selectedCategoryNews = categories.filter(
      (__news) => __news.id === selectedCategory,
    );
    if (selectedCategoryNews.length > 0) {
      _news = selectedCategoryNews[0].news;
    }

    let cats = [
      {
        type: 'Technology',
        color: COLORS.blue,
        textColor: COLORS.lightBlue2,
      },
      {
        type: 'Sport',
        color: COLORS.darkGreen,
        textColor: COLORS.lightGreen,
      },
      {
        type: 'Culture',
        color: COLORS.lightBlue,
        textColor: COLORS.lightBlue2,
      },
      {
        type: 'Business',
        color: COLORS.darkRed,
        textColor: COLORS.lightRed,
      },
    ];

    const renderItem = ({item}) => {
      return (
        <View style={{marginTop: SIZES.padding}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() => console.log('News!')}>
            {/* News Cover  */}
            <Image
              source={item.newsCover}
              resizeMode="cover"
              style={{
                width: 128,
                height: 128,
                borderRadius: SIZES.radius,
              }}
            />

            <View style={{flex: 1}}>
              {/* News Header   */}
              <View style={{flex: 1, marginLeft: SIZES.margin}}>
                <Text
                  style={{
                    marginTop: SIZES.base,
                    ...FONTS.h3,
                    color: COLORS.black,
                  }}>
                  {item.newsHeader}
                </Text>
              </View>

              {/* News Category */}
              <View style={{flexDirection: 'row', marginLeft: SIZES.margin}}>
                {cats.map((cat, idx) => {
                  return (
                    item.newsCategory.includes(cat.type) && (
                      <View
                        key={idx}
                        style={{
                          justifyContent: 'center',
                          allignItems: 'center',
                          padding: SIZES.base,
                          marginRight: SIZES.base,
                          backgroundColor: cat.color,
                          height: 40,
                          borderRadius: SIZES.radius,
                        }}>
                        <Text style={{...FONTS.body3, color: COLORS.white}}>
                          {cat.type}
                        </Text>
                      </View>
                    )
                  );
                })}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={{flex: 1, marginLeft: SIZES.padding}}>
        <FlatList
          data={_news}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
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

      {/* Categories  */}
      <ScrollView style={{marginTop: SIZES.base}}>
        <View>{renderCategoryHeader()}</View>
        <LineDivider />
      </ScrollView>
      {renderCategoryData()}
    </SafeAreaView>
  );
};

export default Home;
