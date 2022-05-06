import * as React from 'react';
import {ImageSourcePropType, StyleSheet, View} from "react-native";
import {LogoItem} from "./LogoItem/LogoItem";
import {Price} from "./Price/Price";
import {TitleItem} from "./TitleItem/TitleItem";
import {RatingItem} from "./RatingItem/RatingItem";
import {MainImage} from "./MainImage/MainImage";


type PropsType = {
    image: ImageSourcePropType
    rating: number
    id: number
    price: number
    name: string

}

export const ProductItem: React.FC<PropsType> = (props) => {

    const {image, rating, id, price, name} = props

    return (
        <>
            <View style={styles.product}>
                <LogoItem/>
                <MainImage image={image}/>
                <View>
                    <TitleItem title={name}/>
                    <View style={styles.rating}>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#FFC833'}/>
                        <RatingItem color={'#EBF0FF'}/>
                        <Price price={price}/>
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