import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import ListRow from '../test_components/ListRow';

const ListWrapper = ({restaurants}) => {

    const cheapResults = restaurants.filter((restaurant)=>restaurant.price === '$');
    const priceyResults = restaurants.filter((restaurant)=>restaurant.price === '$$');


    return (
        <View>
            <Text>$:</Text>
            <ListRow restaurantList={cheapResults} />
            <Text>$$:</Text>
            <ListRow restaurantList={priceyResults} />
        </View>
    )
};

const styles = StyleSheet.create({
})

export default ListWrapper;

{/* <FlatList 
                keyExtractor={(result) => result.id}
                data={results}
                renderItem={({item}) => {
                    //if(item.price === '$'){
                        return (<ListItem title={item.name}/>);
                    //}
                }}
            /> */}