import { StyleSheet } from 'react-native';
import { textStyle } from '../../constants';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray8,
    },
    sectionWrapper: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop:15
    },
    header: {
        height: 50,
        paddingHorizontal: 10
    }
});

export default styles;
