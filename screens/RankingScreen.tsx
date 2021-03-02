import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import MarketCoin from '../components/MarketCoin'
import UserRankingItem from '../components/UserRankingItem'

const portfolioCoins = [
    {
        id: '1',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Virtual Dollars',
        valueChange24H: 0,
        netWorth: 69.420
    },
    {
        id: '2',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Bitcoin',
        valueChange24H: -1.12,
        netWorth: 240.78
    },
    {
        id: '3',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
         name: 'Ethereum',
        valueChange24H: 2.1,
        netWorth: 2930.56
    }
]
const RankingScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.label}>Rankings</Text>
                </View>
            <FlatList 
                style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item, index}) => <UserRankingItem user={item} place={index+1}/>} 
            />
        </View>
    )
}

export default RankingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 150,
        marginTop: 30,
        marginBottom: 10,
    },
    balanceContainer: {
        width: '100%'
    },
    label: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    balance: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    }
})

