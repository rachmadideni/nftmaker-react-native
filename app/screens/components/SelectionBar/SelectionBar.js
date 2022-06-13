import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Text } from '../../../components';
import styles from './SelectionBar.styles';
import { theme } from '../../../theme';
const { colors } = theme;

function SelectionBar(props) {
    const { selectedTraIndex,onPress } = props

    return (
        <View style={styles.selectionBar}>
            <TouchableOpacity style={[styles.textView0, { backgroundColor: selectedTraIndex == 0 ? colors.primary : colors.white }]} 
                onPress={() => onPress(0)}>
                <Text style={[styles.text, { color: selectedTraIndex == 0 ? colors.white : colors.primary }]}>All</Text>
            </TouchableOpacity>
            <View style={styles.viewLine}></View>
            <TouchableOpacity style={[styles.textView, { backgroundColor: selectedTraIndex == 1 ? colors.primary : colors.white }]}
                 onPress={() => onPress(1)}>
                <Text style={[styles.text, { color: selectedTraIndex == 1 ? colors.white : colors.primary }]}>Sent</Text>
            </TouchableOpacity>
            <View style={styles.viewLine}></View>
            <TouchableOpacity style={[styles.textView1, { backgroundColor: selectedTraIndex == 2 ? colors.primary : colors.white }]}
                 onPress={() => onPress(2)}>
                <Text style={[styles.text, { color: selectedTraIndex == 2 ? colors.white : colors.primary }]}>Received</Text>
            </TouchableOpacity>
        </View>
    );
}

export default withTheme(SelectionBar);
