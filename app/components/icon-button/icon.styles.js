import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  icon: { fontSize: 18, color: colors.gray2 },
  container: {
    borderRadius: 50,
    backgroundColor: colors.gray3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
