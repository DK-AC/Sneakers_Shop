import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const Product = () => {
    return (
        <>
            <View style={styles.product}>
                <View style={styles.logoProduct}>
                    <TouchableOpacity onPress={() => {
                        console.log('adidas')
                    }} activeOpacity={0.7}>
                        <Image
                            style={styles.imageProduct}
                            source={require('./../../assets/nikeProduct.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        console.log('adidas')
                    }} activeOpacity={0.7}>
                        <Ionicons name="heart-outline" size={27} color="black"/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        console.log('adidas')
                    }} activeOpacity={0.7}>
                        <Image
                            style={styles.image}
                            source={require('./../../assets/mainImage.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleProduct}>Nike Air Max Plus III</Text>
                </View>
                <View>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    product: {
        width: 340,
        height: 340,
        backgroundColor: '#fff',
        padding: 15
    },
    logoProduct: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageProduct: {
        width: 64,
        height: 30,
    },
    image: {
        width: 280,
        height: 280,
        transform: [{rotateY: '180deg'}, {translateY: -50}]
    },
    titleProduct: {
        fontSize: 15,
        fontWeight: '600',
        color: '#8A8A9D',
        textAlign: 'left'
    },
    title: {
        transform: [{translateY: -60}]
    }
});