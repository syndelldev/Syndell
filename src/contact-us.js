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
  
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    var data = items[0];
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  
      var slider = data.acf.slider;
  
      return (
        <>
  <div className="container">
          <div className="slider-section">
          <Slider {...settings}>
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
          </Slider>
          </div>

          </div>  
        </>
      );
    }
  }
  
export default MyComponent;


// export default function Contact() {
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="container">
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//     </div>
//   );
// }



// var React = require('react');
// // var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// class Contact extends React.Component{
//     render() {
//         return (
//             <Carousel showArrows={true} showIndicators={false} showThumbs={false}>
//                 <div>
//                     <img src="https://syndelltech.com/wp-content/uploads/2021/12/Your-Absolute-Digital-Transformation-partner.gif" alt='1'/>
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="https://syndelltech.com/wp-content/uploads/2021/12/Your-Absolute-Digital-Transformation-partner.gif" alt='1'/>
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="https://syndelltech.com/wp-content/uploads/2021/12/Your-Absolute-Digital-Transformation-partner.gif" alt='1'/>
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };


// export default Contact;