import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";

type PropsType = {
    logo: ImageSourcePropType
}

export const BrandItem: React.FC<PropsType> = ({logo}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => {
            console.log('reebok')
        }} activeOpacity={0.7}>
            <Image
                style={[styles.image, styles.activeImage]}
                source={logo}
            />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 55,
        height: 30,
        opacity: 0.4,
    },
    activeImage: {
        opacity: 1
    },
    item: {
        paddingRight: 20,
    }
});