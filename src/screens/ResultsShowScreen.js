import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) =>{

    //const searchId = navigation.state.params.id;
    const [result, setResult] = useState(null); //when expecting a single object initiate the state with 'null' 
    const searchId = navigation.getParam('id');

    const getBusiness = async(id) => {
        try {
            const response = await yelp.get('/' + id);
            setResult( response.data );
        } catch(e) {
           console.log('Something went wrong :\(' + e);
        }
    };

    // call getBusiness when component is first rendered.
    useEffect(()=> {
        getBusiness(searchId);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>
                <FlatList 
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item })=>{
                        return <Image 
                                source={{uri: item}}
                                style={styles.image}
                            />
                    }}
                />

        </>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom: 15
    }
})

export default ResultsShowScreen;