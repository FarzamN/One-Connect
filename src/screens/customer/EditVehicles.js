import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import BackAndName from '../../components/BackAndName'
import CustomVehicalCard from '../../components/CardComponent/CustomVehicalCard'
import { Color } from '../../utils/Colors'

const EditVehicles = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BackAndName title='Vehicles' color={Color.Black} />
            <CustomVehicalCard />
            <View style={styles.AddBox}>
                <Text style={styles.Add}>Add Another Vehicle</Text>
                <View style={styles.row}>
                    <TextInput style={styles.input} />
                    <TouchableOpacity style={styles.AddBtnBox}>
                        <Text style={styles.AddBtn}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White
    },
    AddBox: {
        marginHorizontal: scale(20)
    },
    Add: {
        color: Color.Black,
        fontSize: scale(15),
        fontWeight: '600'
    },
    AddBtnBox: {
        borderWidth: 1,
        borderColor: Color.Main,
        borderRadius: 20
    },
    row: {
        flexDirection: 'row'
    },
    AddBtn: {
        color: Color.Main
    }
})

export default EditVehicles