import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

export const MainImage = () => {
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => {
                    console.log('adidas')
                }} activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        source={require('./../../../assets/mainImage.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 280,
        height: 280,
        transform: [{rotateY: '180deg'}, {translateX: -30}]
    },
})