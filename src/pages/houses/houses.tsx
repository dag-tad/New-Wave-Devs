import React, { useEffect, useState } from 'react'
import HouseCard from '../../components/card/HouseCard'
import axios from 'axios';

import './style.css';
import useHouse, { IHouse } from '../../hooks/useHouse';
import NotFoundCard from '../../components/notFoundCard/NotFoundCard';

const isValidColor = (strColor: string) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

const Houses = () => {
  const { houses, isLoading, fetchHouses } = useHouse();

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div className='page' data-testid='page'>
      {isLoading && <h1>Loading data...</h1>}
      {houses.length > 0 ? houses.map((house: IHouse) => {
        const colors: string[] = house.houseColours.split(' ');

        const startColor = isValidColor(colors[0]) ? colors[0] : 'white';
        const endColor = isValidColor(colors[2]) ? colors[2] : 'black';
        return <div className='container'>
          <HouseCard id={house.id} name={house.name} animal={house.animal} startColor={startColor} endColor={endColor} founder={house.founder} />
        </div>
      }) : !isLoading ? <NotFoundCard /> : <></>
      }
    </div>
  )
}

export default Houses