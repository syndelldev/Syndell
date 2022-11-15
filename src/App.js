import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Contact from './contact-us';
import Home from './home';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
  render() {
    return (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/contact-us'} className="nav-link">Contact Us</Link></li>
              </ul>
            </nav>

            <hr />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact-us' element={<Contact/>} />
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
