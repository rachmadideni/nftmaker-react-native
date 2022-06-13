import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import styles from './card.styles';

function Card(props) {
    let style = styles.cardWrapper;
    if (props.style) {
        style = {...style, ...props.style};
    }
    return (
        <View style={style} onPress={props.onPress} >
            {props.children}
        </View>
    );
}

export default withTheme(Card);
