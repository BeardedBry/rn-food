import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const SearchBar = () =>{
    return (
        <View style={styles.background}>
            <TextInput
                placeholder="Search"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0eeee',
        margin: 15 
    }
})

export default SearchBar;