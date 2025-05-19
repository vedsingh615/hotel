import './App.scss';
import React from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Backimage from './Components/backimage';
import Video from './Components/Video';
import Symbol from './Components/symbol';
import Nav from './Components/nav';
import Introimage from './Components/introimage';
import SearchBar from './Components/searchbar';
import Offer from './Components/offer';
import Moste from './Components/moste';
import Footer from './Components/footer';
import Carousel from './Components/Carousel';
import DogGrid from './Components/DogGrid';
import ImageGrid from './Components/ImageGrid';
import Feedback from './Components/feedback';


function App() {
  return (
    <div className="App">
      <Backimage />
      <Video />
      <Symbol />
      <Nav />
      <SearchBar />
      <Introimage />
      <Offer />
      <Moste />
      <Carousel />
      <DogGrid />
      <ImageGrid />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
