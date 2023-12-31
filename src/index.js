import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About/about';
import Loft from './pages/Loft/loft';
import Home from './pages/Home/home';
import Error from './components/Error/erreur';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat';
  margin: 0;
  font-weight: 500;
}
main {
  margin: 0 1rem;
}
h1 {
  color: #ff6060;
}
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/loft/:id' element={<Loft/>}/>
        <Route path='/404' element={<Error />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
);
