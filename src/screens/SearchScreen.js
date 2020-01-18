import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () =>{
    const [term, setTerm ] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        console.log('hi');
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Dayton, OH"
                }
            });
            console.log(response.data.businesses.length);
            setResults(response.data.businesses);
        } catch(e) {
            console.log(e);
            setErrorMessage('Something went wrong :\( ');
        }
    }

    // call searchApi when component is first rendered.
    useEffect(()=> {
        searchApi('pasta');
    }, [])

    return (
        <View>
            <SearchBar 
                searchTerm={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <Text>We have found {results.length} results</Text>
        </View>
    )
};



const styles = StyleSheet.create({})

export default SearchScreen;