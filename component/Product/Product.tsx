import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {LogoItem} from "./LogoItem/LogoItem";
import {MainImage} from "./MainImage/MainImage";
import {TitleItem} from "./TitleItem/TitleItem";
import {Price} from "./Price/Price";
import {RatingItem} from "./RatingItem/RatingItem";

export const Product = () => {
    return (
        <>
            <View style={styles.product}>
                <LogoItem/>
                <MainImage/>
                <View>
                    <TitleItem/>
                    <View style={styles.rating}>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#EBF0FF'}/>
                        <Price/>
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