import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type PropsType = {
    color: string
}


export const RatingItem: React.FC<PropsType> = ({color}) => {
    return (
        <View style={styles.rating}>
            <TouchableOpacity onPress={() => {
                console.log('star1')
            }} activeOpacity={0.7}>
                <Ionicons name="star" size={24} color={color}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    rating: {
        display: 'flex',
        flexDirection: 'row',
    },
});

