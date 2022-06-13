import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Card, Text } from '../../../components';
import { images } from '../../../constants';
import styles from './NFTCard.styles';

function NFTCard(props) {

    const [t] = useTranslation();

    const i18 = (key) => {
        return t(key);
    }

    let style = styles.cardWrapper;
    if (props.style) {
        style = {...style, ...props.style};
    }
    return (
        <Card style={style} onPress={props.onPress} >
            <FastImage source={props.data.image} style={styles.image} resizeMode='cover' />
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>{props.data.title}</Text>
                <Text style={styles.footerTextGray}>#{props.data.id}</Text>
            </View>
            <View style={styles.digital}>
                <Text style={styles.digitalText}>{i18("Common.digital_art")}</Text>
            </View>
        </Card>
    );
}

export default withTheme(NFTCard);
