import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  
    var slider_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
  };

    
    var data = items[0];
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  
      var slider = data.acf.slider;
      var trusted_clients = data.acf.trusted_clients_slider;
  
      return (
        <>
        <div className="container">
          <div className="slider-section">
            <Slider {...slider_settings}>
                {(slider).map(s_data => (

                  <div className="slider_content">
                  {console.log(s_data)}
    
                    <div className='slider_text'>
                      <div>
                        <h2 className='slider_title'> {s_data.slider_title} </h2>
                      </div>

                      <div>
                        <a href='/contact-us' className='slider_button'>Get a Proposal</a>
                      </div>
                    </div>


                    <div className='slider_img'>
                      <div>
                        <img src={s_data.slider_image.url} alt="Slider" />
                      </div>
                    </div>


                  </div>
                  
                ))}
            </Slider>
          </div>


          <div className='trustedClient_Section'>
            <div>
              <h2 className='trustedClient_heading'>Trusted by 500+ Clients across the globe for 8+ years</h2>
            </div>

            <div className='trustedClient_slider'>
              <Slider {...settings}>
                  {(trusted_clients).map(t_data => (

                    <div className="slider_content">
                    {console.log(t_data)}

                      <div className='slider_img'>
                        <div>
                          <img src={t_data.url} alt="Slider" />
                        </div>
                      </div>

                    </div>
                  ))}
              </Slider>

            </div>
          </div>



        </div>  
        </>
      );
    }
  }
  
export default MyComponent;
