import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import LaunchItem from './components/LaunchItem';

import './App.css';
import * as API from "./services/launches";
import logo from "./assets/logo-spacex.png";



function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
    console.log(launches)
  }, [])

  

  return (
    <>
      <Image src={logo} m={4} width={300} />
      <Heading as="h1" size="lg">SpaceX Launches</Heading>
      <ul>
        {launches.length === 0 ? (
          <div>Loading...</div>
          ) : (
            launches.map((launch) => (
              <LaunchItem  key={launch.flight_number} {...launch} />
          ))
          )
        }
        
      </ul>
    </>
  )
}

export default App
