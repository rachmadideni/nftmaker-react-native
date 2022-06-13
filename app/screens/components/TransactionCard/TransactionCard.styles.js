import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const { colors } = theme;

export default StyleSheet.create({
    cardWrapper: {
        backgroundColor: colors.transparent,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    transactionIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: -10
    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    detailTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    assetId: {
        fontSize: 14,
        lineHeight: 26,
        color: colors.primary
    },
    userName: {
        fontSize: 14,
        lineHeight: 26,
        color: colors.primary
    },
    date: {
        fontSize: 14,
        lineHeight: 26,
        color: colors.gray5,
    }
});
