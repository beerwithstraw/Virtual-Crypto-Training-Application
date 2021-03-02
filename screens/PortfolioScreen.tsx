import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import image from '../assets/images/logo.webp'
import PortfolioCoin from '../components/PortfolioCoin'

const portfolioCoins = [
    {
        id: '1',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Virtual Dollars',
        symbol: 'USD',
        amount: '69.420',
        valueUSD: '69.420'
    },
    {
        id: '2',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: '1.12',
        valueUSD: '51,240.78'
    },
    {
        id: '3',
        image: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png',
         name: 'Ethereum',
        symbol: 'ETH',
        amount: '2.16',
        valueUSD: '2930.56'
    }
]
const PortfolioScreen = () => {
    return (
        <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View style={styles.balanceContainer}>
                    <Text style={styles.label}>My Portfolio Balance</Text>
                    <Text style={styles.balance}>$159.24</Text>
                </View>
            <FlatList 
                style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item}) => <PortfolioCoin PortfolioCoin={item} />} 
            />
        </View>
    )
}

export default PortfolioScreen

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
        marginBottom: 5,
    },
    balance: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    }
})

