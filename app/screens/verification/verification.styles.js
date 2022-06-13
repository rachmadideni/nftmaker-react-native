import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  descriptionText: {
    color: colors.black2,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  emailText: {
    color: colors.primary,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    textAlign: 'center',
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
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  btnText: {
    color: colors.primary,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonContent: {
    backgroundColor: colors.black1,
  },
  seperator: {
    backgroundColor: colors.gray3,
    height: 1,
    marginHorizontal: 10,
  },
  inputLable: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  inputContainer: {
    paddingTop: 16,
    paddingBottom: 30,
  },
  codeFieldRoot: { marginTop: 16 },
  cell: {
    borderRadius: 6,
    backgroundColor: colors.gray3,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderColor: colors.gray9,
    width: 46,
    height: 46,
  },
  focusCell: {
    borderColor: colors.primary,
  },
  filledCell: {
    backgroundColor: colors.white,
  },
  focusTextInput: {
    color: colors.primary,
  },
  inputText: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: 18,
        lineHeight: 22,
      },
      android: {
        fontSize: 22,
        height: 50,
      },
    }),
  },
});

export default styles;
