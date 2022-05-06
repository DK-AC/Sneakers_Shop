import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type PropsType = {
    logo: ImageSourcePropType
}

export const LogoItem: React.FC<PropsType> = ({logo}) => {
    return (
        <>
            <View style={styles.logoProduct}>
                <TouchableOpacity onPress={() => console.log('adidas')} activeOpacity={0.7}>
                    <Image
                        style={styles.logo}
                        source={logo}
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
