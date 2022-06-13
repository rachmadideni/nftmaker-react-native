import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ImageBackground, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { AppButton, AppHeader, Card, Text } from '../../components';
import { images, textStyle } from '../../constants';
import { NFTCard, SectionHeader } from '../components';
import TransactionCard from '../components/TransactionCard/TransactionCard';
import styles from './home.styles';

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

export const transactionHistory = [
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
]

const Home = (props) => {
  const [t] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <View style={styles.container}>
      <AppHeader title={'john.near'} {...props} />
      <ScrollView>
        <View style={styles.sectionWrapper}>
          <Card style={styles.homeCard}>
            <FastImage source={images.home_card_bg} style={styles.homeBg} resizeMode='contain'></FastImage>
            <Text style={styles.homeCardText}>{i18('Home.start_creating')} <Text style={styles.boldText}>NFTs</Text> {i18('Home.today')}</Text>
            <View style={styles.buttonContainer}>
              <AppButton hasNavigate title={i18('Common.mint_nft')} />
            </View>
          </Card>
        </View>
        <View style={styles.sectionWrapper}>
          <SectionHeader title={i18('Common.my_nfts')} action={i18('Common.see_all')} onPress={() => { }} />
        </View>
        <ScrollView horizontal style={styles.horizontalScrollView}>
          {
            NFTs.map((item, index) => {
              return (
                <NFTCard key={`nft_card_${index}`} style={styles.nftCard} data={item} />
              )
            })
          }
        </ScrollView>
        <View style={styles.sectionWrapper}>
          <SectionHeader title={i18('Home.recent_transactions')} action={i18('Common.see_all')} onPress={() => { }} />
        </View>
        <View style={styles.sectionWrapper}>
          {
            transactionHistory.map((item, index) => {
              return (
                <TransactionCard key={`transaction_card_${index}`} data={item} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(Home);
