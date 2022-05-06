import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View} from "react-native";

type PropsType = {
    image: ImageSourcePropType
}

export const MainImage: React.FC<PropsType> = ({image}) => {
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => console.log('nike')} activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        source={image}
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