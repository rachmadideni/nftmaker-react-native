import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ImageBackground, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { AppButton, AppHeader, Card, Text } from '../../components';
import { images, textStyle } from '../../constants';
import { NFTCard, SectionHeader } from '../components';
import TransactionCard from '../components/TransactionCard/TransactionCard';
import styles from './my-nft.styles';

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

const MyNFT = (props) => {
  const [t] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <View style={styles.container}>
      <AppHeader title={'john.near'} {...props} />
      <ScrollView>
        <View style={styles.sectionWrapper}>
          <SectionHeader title={i18('Common.my_nfts')} action={i18('Common.see_all')} onPress={() => { }} />
        </View>
        <View style={styles.sectionWrapper}>
          {
            NFTs.map((item, index) => {
              return (
                <NFTCard key={`nft_card_${index}`} style={styles.nftCard} data={item} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(MyNFT);
