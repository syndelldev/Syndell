import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function Home() {

  const [data, setData] = useState();

  // useEffect(() => {
  //   fetch('https://syndelltech.com/wp-json/acf/v3/home-reactjs')
  //   .then(response => response.json())
  //   .then(json => setData(json))
  // }, []);

  // axios.get(`https://syndelltech.com/wp-json/acf/v3/home-reactjs`)
  //   .then(res => {
  //   const users = res.data;
  //   setData(users);
  // });

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setData(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
      <div>
        <h2>Home</h2>

        {console.log("1", data)}

        {data.map((d)=>{
          return(
          <>
            <h6>{d.userId}</h6>
          </>
          )
        })}

      </div>
  );
}

export default Home;