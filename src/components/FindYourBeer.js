import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
    <div className='search-container'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <h3>Find Your Beer</h3>
    </div>
  )
}

export default SearchBar