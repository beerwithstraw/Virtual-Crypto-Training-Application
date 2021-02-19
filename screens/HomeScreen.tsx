import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import image from '../assets/images/Saly-1.png'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.header1}>Welcome to Crypto Wars</Text>
            <Text style={styles.header2}>Invest your virtual $100,000 and compete with others</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    image: {
        aspectRatio: 1,
        height: '40%',
        marginTop: -110,
        marginBottom: 30
    }, 

    header1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },

    header2: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 15,
        padding: 15,
        fontWeight: 'bold'

    }
})

