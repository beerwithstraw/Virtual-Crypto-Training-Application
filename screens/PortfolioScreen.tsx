import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PortfolioScreen = () => {
    return (
        <View style={styles.container}>
            <Text>PortfolioScreen</Text>
        </View>
    )
}

export default PortfolioScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

