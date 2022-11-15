import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://syndelltech.com/wp-json/acf/v3/home-reactjs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  var data = items[0];

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    var slider = data.acf.slider;
    return (
      <>

        <div>
            {(slider).map(item => (
              <>
              {console.log(item)}
                <h2> {item.slider_title} </h2>
                <img src={item.slider_image.url} alt="Slider"/>
              </>
            ))}
        </div>

      </>
    );
  }
}

export default MyComponent;