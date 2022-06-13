import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { STATUSBAR_HEIGHT } from '../../constants';

const { colors } = theme;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topContainer: {
    backgroundColor: colors.black,
    paddingTop: STATUSBAR_HEIGHT + 10,
    padding: 20,
  },
  logoImage: {
    height: 42,
    width: 157,
    alignSelf: 'center',
  },
  backgroundImage: {
    height: 350,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainConatiner: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 23,
    paddingBottom: 10,
  },
  activeTab: {
    backgroundColor: colors.gray3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeTabText: {
    color: colors.gray4,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  tabText: {
    color: colors.gray5,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  center: { alignItems: 'center' },
  buttonContainer: {
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: colors.gray3,
    height: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  smallText: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  descriptionText: {
    color: colors.black2,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  loginToText: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  highlight: {
    color: colors.primary,
  },
  inputContainer: {
    paddingTop: 18,
    paddingBottom: 10,
  },
});

export default styles;
