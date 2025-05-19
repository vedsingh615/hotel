import React from 'react'
import card1 from '../assets/familycard.avif'
import card2 from '../assets/cardb.avif'
import card3 from '../assets/cardbreakfast.avif'
const offer = () => {
  return ( <div className='offer'>
    
      <h1>Latest Offers -</h1> <br></br>
    <p>  Dive into cool adventures at our picture-perfect destinations with Forevery One Hotels.</p>
    <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={card1} alt="image" />
      </figure>
      <div class="article-body">
        <h2>Family Offer</h2>
        <p>
        Enjoy 25% savings on memorable family getaways as you embark on journeys filled with joy, wonder and warmth and explore stunning destinations with those you love.  
        </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={card2} alt="" />
      </figure>
      <div class="article-body">
        <h2>New Beginnings</h2>
        <p>
        Enjoy 20% Savings at Our
Newest Hotels
Indulge the explorer in you and set out to discover our newest hotels and novel experiences. Enjoy exclusive 20% savings on breakfast-inclusive rates and celebrate new beginnings with us</p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src={card3} alt="" />
      </figure>
      <div class="article-body">
        <h2>Breakfast Inclusive Rate</h2>
        <p>Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cancellation for that added convenience
          </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
    </div>

  )
}

export default offer
