import { StyleSheet } from 'react-native';
import { textStyle } from '../../constants';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray8,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  buttonContainer: {
    width: 180
  },
  sectionWrapper: {
    paddingHorizontal: 20,
  },
  homeCard: {
    width: '100%',
    height: 183,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  homeBg: {
    width: 200,
    height: 183,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  homeCardText: {
    color: colors.black,
    fontSize: 27,
    lineHeight: 32,
    width: 180
  },
  boldText: {
    fontWeight: '800'
  },
  nftCard: {
    width: 230,
    height: 218,
    marginBottom: 10,
    marginRight: 18,
  },
  horizontalScrollView: {
    paddingLeft: 20
  }
});

export default styles;
