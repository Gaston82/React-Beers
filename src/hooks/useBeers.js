import {useState,useEffect}from 'react';
import {fetchBeers} from '../services/fetchBeers'

export default function useBeers(){
       const [listOfBeers, setListOfBeers] = useState([])

    useEffect(() => {
       const getListOfBeers = async()=>{
           const result = await fetchBeers()
           setListOfBeers(result)
       } 
       getListOfBeers()
    }, [])

    return listOfBeers;
}