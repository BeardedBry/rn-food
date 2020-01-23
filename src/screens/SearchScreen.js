import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) =>{

    //console.log(navigation)

    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter((result)=>result.price === price);
    }

    // results.map((result)=>{
    //     console.log(result.name + ': ' + result.price);
    // });

    return (
        <>
            <SearchBar 
                searchTerm={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} navigation={navigation}/>
                <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} navigation={navigation}/>
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} navigation={navigation}/>
            </ScrollView>
        </>
    )
};



const styles = StyleSheet.create({
})

export default SearchScreen;