import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {LogoItem} from "./LogoItem/LogoItem";
import {MainImage} from "./MainImage/MainImage";
import {TitleItem} from "./TitleItem/TitleItem";
import {Price} from "./Price/Price";

export const Product = () => {
    return (
        <>
            <View style={styles.product}>
                <LogoItem/>
                <MainImage/>
                <View>
                    <TitleItem/>
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
                            <Price/>
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
        marginTop: 20
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
    },
});