import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import * as React from "react";

export const Brand = () => {

    return (
        <>
            <View style={styles.brand}>
                <TouchableOpacity onPress={() => {
                    console.log('nike')
                }} activeOpacity={0.7}>
                    <Image
                        style={[styles.image, styles.activeImage]}
                        source={require('./../../assets/nike.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('adidas')
                }} activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        source={require('./../../assets/adidas.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('puma')
                }} activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        source={require('./../../assets/puma.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    console.log('reebok')
                }} activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        source={require('./../../assets/reebok-logo.png')}
                    />
                </TouchableOpacity>


            </View>
        </>

    );
};

const styles = StyleSheet.create({
    brand: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 55,
        height: 30,
        opacity: 0.4
    },
    activeImage: {
        opacity: 1
    }
});

