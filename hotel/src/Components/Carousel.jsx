import React from 'react';
import chef from '../assets/chef.avif';
import sceen from '../assets/sceen.avif';
import sceen2 from '../assets/sceen2.avif';
import signature from '../assets/signature.avif';
import signature2 from '../assets/signature2.jpg';


const Carousel = () => {
  return (<div className='name1'>
    <div className='name'>
      <h1>Signature Dining</h1>
      <p>A Culinary Legacy Fine Dining at Forevery One Restaurants Embark on a journey of exquisite experiences for the discerning connoisseur, seamlessly woven together with impeccable service, sophisticated ambience and masterful culinary artistry
      Our Legendary Restaurant Brands Step into the realm of our culinary legends where a symphony of flavours enchants your taste buds, ambience embraces you in a tapestry of elegance and the genuine warmth of our service leaves you feeling truly indulged
      </p>
      <img src={chef} al="chef" className='chef'  />
      <div className='all-img'>
      <img src={sceen} al="sceen" className='all-img1'  />
      <img src={signature} al="signature" className='all-img2' />
      <img src={sceen2} al="sceen" className='all-img3'/>
      <img src={signature2} al="signature" className='all-img4'/>
    </div></div></div>
  )
}

export default Carousel
