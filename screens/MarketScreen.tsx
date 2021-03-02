import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import MarketCoin from '../components/MarketCoin'

const portfolioCoins = [
    {
        id: '1',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Virtual Dollars',
        symbol: 'USD',
        valueChange24H: 0,
        valueUSD: 69.420
    },
    {
        id: '2',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        valueChange24H: -1.12,
        valueUSD: 240.78
    },
    {
        id: '3',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
         name: 'Ethereum',
        symbol: 'ETH',
        valueChange24H: 2.1,
        valueUSD: 2930.56
    }
]
const MarketScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.label}>Crypto Market</Text>
                </View>
            <FlatList 
                style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item}) => <MarketCoin MarketCoin={item} />} 
            />
        </View>
    )
}

export default MarketScreen

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

