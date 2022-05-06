import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const Header = () => {
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    console.log('menu')
                }} activeOpacity={0.7}>
                    <Ionicons name="menu" size={24} color="black"/>
                </TouchableOpacity>
                <Text style={styles.title}>Explore</Text>
                <TouchableOpacity onPress={() => {
                    console.log('shoppingcart')
                }} activeOpacity={0.7}>
                    <Ionicons name="cart-outline" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        color: '#313B5D',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    title: {
        color: '#313B5D',
        fontSize: 21,
        fontWeight: '700',
    }
});


