import React from 'react';
import {StyleSheet, Text} from "react-native";

type PropsType = {
    title: string
}

export const TitleItem: React.FC<PropsType> = ({title}) => {
    return (
        <><Text style={styles.title}>{title}</Text></>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: '#8A8A9D',
        textAlign: 'left'
    },
})