import React from "react";
import { useEffect, useState } from "react";
import "../planets/planets.scss";

const Planets = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets/')
      .then(response => response.json())
      .then(json => setData(json.results))
      .catch(error => console.error(error));
  }, []);
  
  console.log(data)

    return (
        <div id="containerPlanets">
            <h3>Hello world2</h3>
            {data ? 
            <ul>
              
              <li>
                Name: {data[0].name}
              </li>
            </ul> : 'Loading...'}
        </div>
    )
}

export default Planets;


//{JSON.stringify(data)}