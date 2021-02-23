import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import image from '../assets/images/logo.png'

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
        alignItems: 'center',

    },

    image: {
        width: 200,
        height: 180,
        marginTop: 70,
        marginBottom: 30,
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

