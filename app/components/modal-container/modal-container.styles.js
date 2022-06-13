import { StyleSheet } from 'react-native';
import { STATUSBAR_HEIGHT } from '../../constants';
import { theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: STATUSBAR_HEIGHT + 15 },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: colors.black,
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  indicator: {
    height: 3,
    backgroundColor: colors.primary,
    width: '66%',
  },
});

export default styles;
