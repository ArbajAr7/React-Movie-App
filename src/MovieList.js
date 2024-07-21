import React from 'react'

const MovieList = (props) => {
    const {displayMovie} = props
  return (
    <table id="table">
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>

        {displayMovie.map((item, index) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.year}</td>
          </tr>
        ))}
      </table>
  )
}

export default MovieList