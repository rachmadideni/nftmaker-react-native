import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  label: {
    color: colors.gray7,
    fontSize: 12,
    marginBottom: 11,
  },
  input: {
    color: colors.gray7,
    fontSize: 16,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
    color: colors.gray7,
    top: -5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray8,
    borderWidth: 1,
    borderColor: colors.gray9,
    borderRadius: 8,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
});

export default styles;
