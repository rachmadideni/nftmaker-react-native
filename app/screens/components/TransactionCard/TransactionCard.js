import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Card, Text } from '../../../components';
import { images } from '../../../constants';
import { fromNow } from '../../../helpers';
import styles from './TransactionCard.styles';

function TransactionCard(props) {

    const [t] = useTranslation();

    const i18 = (key) => {
        return t(key);
    }

    let style = styles.cardWrapper;
    return (
        <View style={style} onPress={props.onPress} >
            <View style={styles.detailWrapper}>
                <FastImage source={props.data.in ? images.transaction_in : images.transaction_out} style={styles.transactionIcon} />
                <View style={styles.detailTextWrapper}>
                    <Text style={styles.assetId}>#{props.data.asset_id}</Text>
                    <Text>{props.data.in ? `${i18('Common.received_from')}` : `${i18('Common.sent_to')}`} <Text style={styles.userName}>{props.data.in ? props.data.sender.name : props.data.receiver.name}</Text></Text>
                </View>
            </View>
            <Text style={styles.date}>{fromNow(props.data.timestamp)}</Text>
        </View>
    );
}

export default withTheme(TransactionCard);
