import { StyleSheet } from 'react-native';
import { STATUSBAR_HEIGHT } from '../../constants';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: STATUSBAR_HEIGHT,
  },
  wallet: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 40,
    maxWidth: '70%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 50,
    paddingHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.02,
    shadowRadius: 5,
  },
  walletIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  settingsIcon: {
    height: 26,
    width: 26,
    alignSelf: 'center',
  },
});

export default styles;
