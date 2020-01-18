import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () =>{
    return (
        <View style={styles.backgroundStyle}>
            <Icon
                name="search"
                style={styles.iconStyle}
            />
            <TextInput
            style={styles.inputStyle}
                placeholder="Search"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
})

export default SearchBar;