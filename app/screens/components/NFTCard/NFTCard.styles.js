import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

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
    },
    image: {
        width: '100%',
        height: 136,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: 15,   
    },
    footerTitle: {
        fontSize: 16,
        lineHeight: 30,
        color: colors.black
    },
    footerTextGray: {
        fontSize: 16,
        lineHeight: 30,
        color: colors.gray7
    },
    digital: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 87,
        height: 25,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    digitalText: {
        fontSize: 14,
        color: colors.black,
        fontWeight: '600'
    }
});
