import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from "./component/Header/Header";
import {SearchBar} from "./component/SearchBar/SearchBar";
import {Brand} from "./component/Brand/Brand";
import {Product} from "./component/Product/Product";


export default function App() {
    return (
        <View style={styles.container} >
            <Header/>
            <View style={styles.searchBar}>
                <SearchBar/>
            </View>
            <View style={styles.brand}>
                <Brand/>
            </View>
            <Product/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#E5E5E5',
    },
    wrapper: {
        flex: 1
    },
    searchBar: {
        paddingTop: 27,
    },
    brand: {
        paddingTop: 30
    },
});
