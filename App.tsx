import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Header} from "./component/Header/Header";

export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    wrapper: {
        flex: 1
    }
});
