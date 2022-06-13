import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  label: { fontWeight: '500', fontSize: 17, lineHeight: 22 },
  container: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;
