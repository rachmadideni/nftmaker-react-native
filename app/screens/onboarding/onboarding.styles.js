import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { STATUSBAR_HEIGHT } from '../../constants';

const { colors } = theme;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topContainer: {
    backgroundColor: colors.black,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  logoImage: {
    height: 34,
    width: 125,
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: '-35%',
    left: '7%',
    height: '100%',
    width: '100%',
  },
  headerText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 27,
    marginTop: 90,
    // ...FontHelper(),
  },
  topContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: STATUSBAR_HEIGHT + 10,
  },
  menuContainer: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT + 10,
    right: 0,
  },
  menuIcon: {
    color: colors.white,
    fontSize: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 32,
    paddingTop: 30,
    paddingBottom: 25,
  },
  titleBold: {
    fontWeight: '800',
  },
  nftImage: {
    height: '50%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  privacyText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    color: colors.primary,
    padding: 10,
  },
  privacySubText: {
    color: colors.black,
  },
  copyrightText: {
    color: colors.gray1,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    padding: 5,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
  },
  modalContent: {
    backgroundColor: colors.background,
    margin: 15,
    padding: 16,
    marginBottom: 10,
    borderRadius: 18,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  bottomBtn: {
    padding: 10,
  },
  bottomBtnContainer: {
    paddingHorizontal: 40,
    paddingBottom: 8,
  },
  bottomBtnText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '500',
    color: colors.black,
  },
  signInBtn: {
    backgroundColor: colors.black1,
  },
});

export default styles;
