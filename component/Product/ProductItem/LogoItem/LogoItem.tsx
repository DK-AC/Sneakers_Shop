import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const LogoItem = () => {
    return (
        <>
            <View style={styles.logoProduct}>
                <TouchableOpacity onPress={() => console.log('adidas')} activeOpacity={0.7}>
                    <Image
                        style={styles.logo}
                        source={require('./../../../../assets/nikeProduct.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('adidas')
                }} activeOpacity={0.7}>
                    <Ionicons name="heart-outline" size={27} color="grey"/>
                </TouchableOpacity>
            </View>

        </>
    );
};


const styles = StyleSheet.create({
    logoProduct: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 64,
        height: 30,
    },
})
