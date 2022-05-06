import * as React from 'react';
import {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {View} from "react-native";

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            /></View>

    );
};

