import React, { useEffect, useState } from 'react';
import './App.css';

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

        <div className="slider-section">
            {(slider).map(s_data => (
              <div className="slider_content">
              {console.log(s_data)}

                <div className='slider_text'>
                  <h2 className='slider_title'> {s_data.slider_title} </h2>
                  <a href='/contact-us' className='slider_button'>Get a Proposal</a>
                </div>

                <div className='slider_img'>
                  <img src={s_data.slider_image.url} alt="Slider" />
                </div>

              </div>
            ))}
        </div>

      </>
    );
  }
}

export default MyComponent;