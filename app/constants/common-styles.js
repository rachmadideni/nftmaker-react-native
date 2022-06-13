import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const os = Platform.OS;

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('screen').height;

export const STATUSBAR_HEIGHT = getStatusBarHeight();
export const BOTTOM_SPACE = getBottomSpace();

const DESIGN_DIMENSIONS = { width: 375, height: 812 };

export const getPercentageHeight = (heightParam) => {
  return Platform.select({
    ios: height * (heightParam / DESIGN_DIMENSIONS.height),
    android: heightParam,
  });
};

export const getPercentageWidth = (widthParam) => {
  return Platform.select({
    ios: width * (widthParam / DESIGN_DIMENSIONS.width),
    android: widthParam,
  });
};

export const textStyle = {
  small: {
    fontSize: 12,
    fontWeight: '200',
  },
  medium: {
    fontSize: 14,
    fontWeight: '300',
  },
  normal: {
    fontSize: 16,
    fontWeight: '400',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
  },
};
