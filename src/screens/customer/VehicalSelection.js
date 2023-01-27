import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import BackAndName from '../../components/BackAndName'
import { Color } from '../../utils/Colors'

const VehicalSelection = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BackAndName ContainerRestyle={{

            }} title={'Vehicle Selection'} color={Color.Black} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White
    }
})
export default VehicalSelection
