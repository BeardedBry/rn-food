import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

import ListWrapper from '../test_components/ListWrapper';


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

            <ListWrapper restaurants={results}/>

        </View>
    )
};



const styles = StyleSheet.create({})

export default SearchScreen;