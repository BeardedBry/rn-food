import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
        //console.log('hi');
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Dayton, OH"
                }
            });
            //console.log(response.data.businesses.length);
            setResults(response.data.businesses);
        } catch(e) {
            //console.log(e);
            setErrorMessage('Something went wrong :\( ');
        }
    }

    // call searchApi when component is first rendered.
    useEffect(()=> {
        searchApi('pasta');
    }, [])

    // return what we need for our component
    return [searchApi, results, errorMessage];
};