import React from 'react';
import l1 from '../assets/l1.avif';
import l2 from '../assets/l2.avif';
import l3 from '../assets/l3.avif';
import l4 from '../assets/l4.avif';
import l5 from '../assets/l5.avif';
import l6 from '../assets/l6.avif';
import l7 from '../assets/l7.avif';
import l8 from '../assets/l8.avif';
import l9 from '../assets/l9.avif';
import l10 from '../assets/l10.avif';

const ImageGrid = () => {
  return (
    <div className="image">
  
<div class="grid-container">
  <div>
    <img className='grid-item grid-item-1' src={l1} alt=''/>
    <p>DELHI</p>
  </div>
  <div>
    <img className='grid-item grid-item-2' src={l2} alt=''/>
    <p>AJMER</p>
  </div>
  <div>
    <img className='grid-item grid-item-3' src={l3} alt=''/>
    <p>ALLEPPEY</p>
  </div>
  <div>
    <img className='grid-item grid-item-4' src={l4} alt=''/>
    <p>ALIBAUG</p>
  </div>
  <div>
    <img classN='grid-item grid-item-5' src={l5} alt=''/>
    <p>BANGLORE</p>
  </div>
  <div>
    <img className='grid-item grid-item-6' src={l6} alt=''/>
    <p>UDAYPURI</p>
  </div>
  <div>
    <img className='grid-item grid-item-7' src={l7} alt=''/>
    <p>RISHEKASE</p>
  </div>
  <div>
    <img className='grid-item grid-item-8' src={l8} alt=''/>
    <p>RAJISTANE</p>
  </div>
  <div>
    <img className='grid-item grid-item-9' src={l9} alt=''/>
    <p>LUCKNOWE</p>
  </div>
  <div>
    <img className='grid-item grid-item-10' src={l10} alt=''/>
    <p>GOA</p>
  </div>
</div>
    </div>
  );
};

export default ImageGrid;
