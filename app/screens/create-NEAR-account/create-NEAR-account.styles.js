import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  descriptionText: {
    color: colors.black2,
    fontSize: 16,
    lineHeight: 24,
  },
  mainConatiner: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  smallText: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  btnText: {
    color: colors.primary,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContent: {
    backgroundColor: colors.black1,
  },
  seperator: {
    backgroundColor: colors.gray3,
    height: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  privacyText: {
    color: colors.gray7,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  highlight: {
    color: colors.primary,
  },
  input: {
    paddingTop: 20,
  },
  inputRightContainer: {
    borderLeftWidth: 1,
    borderLeftColor: colors.gray9,
    height: '100%',
    paddingLeft: 18,
    paddingRight: 20,
  },
  inputTextContainer: { flex: 1, justifyContent: 'center' },
  inputRightText: {
    color: colors.gray7,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
});

export default styles;
