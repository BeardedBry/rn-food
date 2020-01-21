import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ListItem = ({title, image}) =>{
    console.log(image);
    return (
        <View style={styles.restaurant}>
            <Text>{title}</Text>
            <Image 
                source={{uri: image}}
                style={{width: 100, height: 100}}
            />
        </View> 
    )
};

const styles = StyleSheet.create({
    restaurant: {
        width: 200,
        height: 200,
        backgroundColor: 'grey',
        alignItems: 'center',
        margin: 5,
    }
})

export default ListItem;