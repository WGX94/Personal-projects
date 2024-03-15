import { useEffect, useState } from "react";

const listPlanets = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch(`https://swapi.dev/api/planets/`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error))
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default listPlanets;

//{users.map(user => ( key={user.id}{user.name}))}


/*
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://swapi.dev/api/planets/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));



*/