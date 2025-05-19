import React from 'react'

const DogGrid = () => {
 
  return (
    
      <div className='location'>
      <h1 className='heading'>FEATURED DESTINATIONS</h1>

      <div className="filter-container">
        <div className="filter-search">
          <span className="filter-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Destination / City"
            className="filter-search-input"
          />
        </div>

        <div className="filter-dropdown-container">
          <select className="filter-dropdown">
            <option>Themes</option>
            <option>Luxury</option>
            <option>Budget</option>
            <option>Family</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default DogGrid
