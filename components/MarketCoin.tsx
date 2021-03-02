import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface PortfolioCoinProps {
    MarketCoin: {
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: number, 
    }

}

const MarketCoin = (props: PortfolioCoinProps) => {
    const {
        MarketCoin: {
            image, name, symbol, valueChange24H, valueUSD,
        }, 
    } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={{uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>${valueUSD}</Text>
                <Text style={{color: valueChange24H >= 0 ? '#4bdb00' : '#f10000'}}>{valueChange24H > 0 && '+'} {valueChange24H}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MarketCoin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginLeft: 10,
        height: 75,
        margin: 6,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#323232',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },
    symbol: {
        color: 'gray'
    }
})
