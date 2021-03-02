import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface UserRankingItemProps {
    user: {
        image: string,
        name: string,
        valueChange24H: number,
        netWorth: number, 
    },
    place: number

}

const UserRankingItem = (props: UserRankingItemProps) => {
    const {
        user: {
            image, name, valueChange24H, netWorth,
        }, place
    } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>{place} </Text>
                <Image style={styles.image} source={{uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>${netWorth}</Text>
                <Text style={{color: valueChange24H >= 0 ? '#4bdb00' : '#f10000'}}>{valueChange24H > 0 && '+'} {valueChange24H}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserRankingItem

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
