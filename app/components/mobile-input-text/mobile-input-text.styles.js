import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderColor: colors.gray9,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: colors.gray8,
  },
  content: {
    flex: 1,
  },
  iconStyle: {
    marginLeft: 15,
    height: 20,
    width: 20,
  },
  error: {
    paddingHorizontal: 15,
    textAlign: 'left',
    marginVertical: 5,
  },
  flagStyle: { width: 35, height: 24, resizeMode: 'cover' },
  inputStyle: {
    color: colors.gray7,
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 95,
  },
  dialCodeContainer: {
    position: 'absolute',
    left: 60,
    height: '100%',
    justifyContent: 'center',
  },
  dialCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dialCodeIcon: {
    color: colors.gray7,
    fontSize: 20,
  },
  dialCodeSeperator: {
    backgroundColor: colors.gray9,
    height: '200%',
    width: 2,
    marginLeft: 10,
    marginRight: 6,
  },
  dialCodeText: {
    color: colors.gray7,
    fontSize: 16,
    lineHeight: 19,
  },
});

export default styles;
