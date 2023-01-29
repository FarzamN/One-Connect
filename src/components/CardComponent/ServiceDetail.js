import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { Color } from '../../utils/Colors'
import CustomInput from '../CustomInput'
import { useForm } from 'react-hook-form';
import CustomButton from '../CustomButton'
import CustomModal from '../CustomModal'

const ServiceDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'all' });
    return (
        <View>
            <Text style={styles.Details}>Details</Text>
            <View style={styles.DateBox}>
                <Text style={styles.Text}>Service </Text>
                <Text style={styles.Text}>Battery Service</Text>
            </View>
            <View style={styles.DateBox}>
                <Text style={styles.Text}>Location </Text>
                <Text style={styles.Text}>MS 3987, USA</Text>
            </View>
            <View style={styles.DateBox}>
                <Text style={styles.Text}>Subtotal </Text>
                <Text style={styles.Text}>$29.89</Text>
            </View>
            <View style={styles.DateBox}>
                <Text style={styles.Text}>Fee </Text>
                <Text style={styles.Text}>$2.00</Text>
            </View>
            <View style={styles.BottomBorder}></View>
            <View style={styles.DateBox}>
                <Text style={styles.Total}>Total</Text>
                <Text style={styles.Total}>$30.98</Text>
            </View>
            <View style={styles.BottomEndBorder}></View>
            <CustomInput
                style={{
                    width: '90%',
                    height: verticalScale(45),
                    borderWidth: 1,
                    borderColor: Color.Main,
                    borderRadius: 20,
                    marginTop: scale(20),
                    paddingHorizontal: moderateScale(15),
                }}
                control={control}
                keyboardType="email-address"
                name="forget_pass"
                rules={{
                    required: 'email is required',
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Enter a valid email',
                }}
                placeholder="Enter the tip"
                placeholderTextColor={'#32323266'}
            />
            <CustomButton
                onPress={() => {
                    setShowModal(toggleModal());
                    console.log('modal Open');
                }}
                title='PAY' textStyle={{ fontSize: scale(18), fontWeight: '700' }} containerStyle={{
                    width: '85%', height: verticalScale(55), marginTop: scale(50), paddingHorizontal: 30
                }} />
            {showModal == false ? (
                <CustomModal
                    Modal_Text="Feedback"
                    Long_Text="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor "
                    isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                />
            ) : (
                setShowModal(false)
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    Text: {
        color: Color.placeholderTextColor,
        fontSize: scale(17),
    },
    DateBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        marginBottom: scale(10)
    },
    Details: {
        color: Color.Black,
        fontWeight: '700',
        fontSize: scale(22),
        marginLeft: scale(20),
        marginVertical: scale(20)
    },
    BottomBorder: {
        borderBottomWidth: 1,
        marginHorizontal: 30,
        borderBottomColor: Color.borderColor,
        marginTop: 10
    },
    BottomEndBorder: {
        borderBottomWidth: 1,
        borderBottomColor: Color.Black,
        marginTop: scale(10)
    },
    Total: {
        color: Color.Black,
        fontWeight: '700',
        fontSize: scale(22),
        marginHorizontal: scale(20),
        marginTop: scale(15)
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default ServiceDetail
