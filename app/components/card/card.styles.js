import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { colors } = theme;

export default StyleSheet.create({
    cardWrapper: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.02,
        shadowRadius: 1,
        overflow: 'hidden'
    }
});
