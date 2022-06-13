import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { withTheme } from 'react-native-paper';
import { AppHeader } from '../../components';
import { images } from '../../constants';
import { SectionHeader } from '../components';
import { SelectionBar } from '../components/SelectionBar';
import TransactionCard from '../components/TransactionCard/TransactionCard';
import styles from './history.styles';

export const NFTs = [
    {
        id: 1234,
        title: 'Vecotry Illustration',
        image: require('../../assets/images/nft_1.png'),
        user: 'John Doe',
    },
    {
        id: 1235,
        title: 'Nature Illustration',
        image: require('../../assets/images/nft_2.png'),
        user: 'John Doe',
    }
]

let transactionHistory = [
    {
        id: 1,
        in: true,
        out: false,
        asset_id: 1234,
        sender: {
            id: 1,
            name: 'John Doe',
            wallet: 'john.near',
        },
        receiver: {
            id: 2,
            name: 'Mike Hansen',
            wallet: 'micheal.near',
        },
        timestamp: 1646255141389
    },
    {
        id: 2,
        in: true,
        out: false,
        asset_id: 1235,
        sender: {
            id: 1,
            name: 'John Doe',
            wallet: 'john.near',
        },
        receiver: {
            id: 2,
            name: 'Mike Hansen',
            wallet: 'micheal.near',
        },
        timestamp: 1646257141389
    },
    {
        id: 3,
        in: false,
        out: true,
        asset_id: 1236,
        sender: {
            id: 1,
            name: 'John Doe',
            wallet: 'john.near',
        },
        receiver: {
            id: 2,
            name: 'Mike Hansen',
            wallet: 'micheal.near',
        },
        timestamp: 1646257041389
    },
    {
        id: 4,
        in: true,
        out: false,
        asset_id: 1235,
        sender: {
            id: 1,
            name: 'John Doe',
            wallet: 'john.near',
        },
        receiver: {
            id: 2,
            name: 'Mike Hansen',
            wallet: 'micheal.near',
        },
        timestamp: 1646257141389
    },
    {
        id: 5,
        in: false,
        out: true,
        asset_id: 1236,
        sender: {
            id: 1,
            name: 'John Doe',
            wallet: 'john.near',
        },
        receiver: {
            id: 2,
            name: 'Mike Hansen',
            wallet: 'micheal.near',
        },
        timestamp: 1646257041389
    },
]

const History = (props) => {
    const [allTranscationHistoryData, setAllTranHistdata] = useState(transactionHistory);
    const [selectedTraIndex, setSelectedTraIndex] = useState(0);
    const [t] = useTranslation();

    const i18 = (key) => {
        return t(key);
    };

    const filterTranscationHistory = (index) => {
        setSelectedTraIndex(index);
        let filterData = allTranscationHistoryData.filter((item) => 
                index == 1 ? item.out == true : index == 2 ? 
                        item.in == true : (item.in == true || item.out == true))
        transactionHistory = filterData;
    }

    const renderItem = (item) => {
        return (
            <TransactionCard key={`transaction_card_${item.index}`} data={item.item} />
        )
    }


    return (
        <View style={styles.container}>
            <AppHeader title={'john.near'} {...props} />
            <View style={styles.header}>
                <SectionHeader title={i18('History.History')} action={i18('History.Send_NFT')} isActionWithImage={true} image={images.arrow} onPress={() => { }} />
            </View>
            <SelectionBar selectedTraIndex={selectedTraIndex} onPress={(index) => filterTranscationHistory(index)} />
            <View style={styles.sectionWrapper}>
                <FlatList
                    data={transactionHistory}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

export default withTheme(History);
