import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export interface IHouse {
    id: string;
    name: string;
    houseColours: string;
    founder: string;
    animal: string;
    element: string;
    ghost: string;
    commonRoom: string;
    heads: 
        {
            id: string;
            firstName: string;
            lastName: string;
        }[],
    traits: {
            id: string;
            name: string;
        }[],
}
function useHouse() {
    const [houses, setHouses] = useState<IHouse[]>([]);
    const BASE_API = process.env.BASE_API;
    const fetchData = async () => {
        const result = await axios.get('https://wizard-world-api.herokuapp.com/houses');
        return result;
    }

  const { data, isLoading, refetch: fetchHouses } = useQuery({queryKey: ['houses'], queryFn: () => fetchData()});

  useEffect(() => {
    if (data) {
        setHouses(data.data);
    }
  },[data]);
  
  return { houses, isLoading, fetchHouses}
}

export default useHouse