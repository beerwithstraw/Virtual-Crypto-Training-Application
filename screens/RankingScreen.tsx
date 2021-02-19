import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RankingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>RankingScreen</Text>
        </View>
    )
}

export default RankingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
