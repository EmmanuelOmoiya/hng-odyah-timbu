import { useState, useEffect } from 'react';
import axios from 'axios';
import { useProductsContext } from "@/context/cart-context";

const useFetch = () => {
    const { setProducts } = useProductsContext();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        
        try {
            const response = await axios.get(`https://api.timbu.cloud/products?organization_id=${process.env.EXPO_PUBLIC_API_ORGANIZATION_ID}&Appid=${process.env.EXPO_PUBLIC_API_APP_ID}&Apikey=${process.env.EXPO_PUBLIC_API_KEY}&size=10&page=1`)
            setData(response.data)
            setProducts(response.data.items)
            setIsLoading(false);
        } catch (error) {
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch  = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
};
export default useFetch;