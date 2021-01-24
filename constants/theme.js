import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#FFFFFF',
  secondary: '#363333',

  // colors
  gray: '#2D3038',
  black: '#1E1B26',
  white: '#FFFFFF',
  blue: '#3a60da',
  lightBlue: '#eff5ff',
  lightBlue2: '#cbe6fe',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 48,
  h1: 32,
  h2: 24,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 18,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Poppins-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
