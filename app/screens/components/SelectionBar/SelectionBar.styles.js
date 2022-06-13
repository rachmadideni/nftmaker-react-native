import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const { colors } = theme;

export default StyleSheet.create({
    selectionBar: {
        width:'95%',
        height:35,
        marginHorizontal:10,
        borderRadius:10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.primary, 
        justifyContent: 'space-between'
    },
    textView0: {
        justifyContent:'center',
        alignItems:'center', 
        width: '33%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    textView: {
        justifyContent:'center',
        alignItems:'center', 
        width: '33%',
    },
    textView1: {
        justifyContent:'center',
        alignItems:'center', 
        width: '33%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    viewLine: {
        width:1,
        backgroundColor: colors.primary
    },
    text: {
        color: colors.primary
    }
});
