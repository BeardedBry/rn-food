import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

// recive array of list items

const ListRow = ( {restaurantList} ) =>{
    return (
        <View>
            <FlatList
                horizontal={true}
                keyExtractor={(result) => result.id}
                data={restaurantList}
                renderItem={({ item }) => {
                        return (<ListItem item={item} />);
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
})

export default ListRow;