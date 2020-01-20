import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ListItem from '../test_components/ListItem';
import ListRow from '../test_components/ListRow';


const SearchScreen = () =>{
    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

    results.map((result)=>{
        console.log(result.name + ': ' + result.price);
    });

    return (
        <View>
            <SearchBar 
                searchTerm={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <Text>We have found {results.length} results</Text>

            <ListRow />

            <FlatList 
                keyExtractor={(result) => result.id}
                data={results}
                renderItem={({item}) => {
                    if(item.price === '$'){
                        return (<ListItem title={item.name}/>);
                    }
                }}
            />
        </View>
    )
};



const styles = StyleSheet.create({})

export default SearchScreen;