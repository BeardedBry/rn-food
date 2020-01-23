import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{
    //console.log(navigation.state);
    const searchId = navigation.state.params.id;
    const [results, setResults] = useState([]);

    const searchBusiness = async(id) => {
        console.log(id);
        try {
            const response = await yelp.get('/' + id);
            console.log(response.data.photos);
            setResults(response.data.photos);
        } catch(e) {
            //console.log(e);
           console.log('Something went wrong :\(' + e);
        }
    }

    // call searchApi when component is first rendered.
    useEffect(()=> {
        searchBusiness(searchId);
    }, [])

    return (
        <>
            <Text>Results Show </Text>
                <FlatList 
                    data={results}
                    keyExtractor={(result)=>{result.slice(-10)}}
                    renderItem={({ item })=>{
                        return <Image 
                            source={{uri: item}}
                            style={{width: 250, height: 200}}
                        />
                    }}
                />

        </>
    )
};

const styles = StyleSheet.create({})

export default ResultsShowScreen;