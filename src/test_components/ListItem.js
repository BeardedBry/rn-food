import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ListItem = ({item}) =>{
    console.log(item.image_url)
    return (
        <View style={styles.restaurant}>
            <Image 
                source={{uri: item.image_url}}
                style={{width: 200, height: 100}}
            />
            <Text>{item.name}</Text>

        </View> 
    )
};

const styles = StyleSheet.create({
    restaurant: {
        width: 200,
        height: 200,
        alignItems: 'center',
        margin: 5,
    }
})

export default ListItem;