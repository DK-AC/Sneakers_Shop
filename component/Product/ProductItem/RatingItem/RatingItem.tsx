import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type PropsType = {
    color: string
}

export const RatingItem: React.FC<PropsType> = ({color}) => {
    return (
        <>
            <TouchableOpacity onPress={() => console.log('star1')} activeOpacity={0.7}>
                <Ionicons name="star" size={24} color={color}/>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    rating: {
        display: 'flex',
        flexDirection: 'row',
    },
});

