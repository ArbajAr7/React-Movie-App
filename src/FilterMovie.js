import React from 'react'

const FilterMovie = (props) => {
    const {genres, handleFilter} = props;
  return (
    <div>
        <h2>Filter by Genre</h2>
        <div id="genreBtn">
            <button id="btn" onClick={() => handleFilter("All")}>All</button>
            {genres.map(item => (
                <button id="btn" onClick={() => handleFilter(item)}>{item}</button>
            ))}
        </div>
    </div>
  )
}

export default FilterMovie