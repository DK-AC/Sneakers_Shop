import * as React from 'react';
import {useState} from 'react';
import {Searchbar} from 'react-native-paper';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
    );
};

