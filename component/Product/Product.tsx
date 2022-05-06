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
                        <Ionicons name="heart-outline" size={27} color="grey"/>
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
                <View >
                    <Text style={styles.titleProduct}>Nike Air Max Plus III</Text>
                    <View>
                        <View style={styles.rating}>
                            <TouchableOpacity onPress={() => {
                                console.log('star1')
                            }} activeOpacity={0.7}>
                                <Ionicons name="star" size={24} color="#FFC833"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log('star2')
                            }} activeOpacity={0.7}>
                                <Ionicons name="star" size={24} color="#FFC833"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log('star3')
                            }} activeOpacity={0.7}>
                                <Ionicons name="star" size={24} color="#FFC833"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log('star4')
                            }} activeOpacity={0.7}>
                                <Ionicons name="star" size={24} color="#FFC833"/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                console.log('star5')
                            }} activeOpacity={0.7}>
                                <Ionicons name="star" size={24} color="#EBF0FF"/>
                            </TouchableOpacity>
                            <Text style={styles.price}>
                                <Text style={styles.wallet}>$</Text>
                                189
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    product: {
        backgroundColor: '#fff',
        padding: 15,
        marginTop:20
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
        transform: [{rotateY: '180deg'}, {translateX: -30}]
    },
    titleProduct: {
        fontSize: 15,
        fontWeight: '600',
        color: '#8A8A9D',
        textAlign: 'left'
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
    },
    price: {
        fontSize: 23,
        fontWeight: '700',
        color: '#313B5D',
        transform: [{translateX: 160}]
    },
    wallet: {
        color: '#3A63E0',
        fontSize: 18,
        fontWeight: '700',
    }
});