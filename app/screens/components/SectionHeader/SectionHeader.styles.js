import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const { colors } = theme;

export default StyleSheet.create({
    cardWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 8,
        paddingHorizontal: 4
    },
    header: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '800',
        lineHeight: 30,
    },
    action: {
        color: colors.primary,
        fontSize: 16,
        lineHeight: 30,
    }
});
