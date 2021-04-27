import React from 'react';
import { InfoSection, Card } from '../../components';
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <InfoSection {...homeObjectFour} />
      <Card />          
    </>
  )
}

export default Home;