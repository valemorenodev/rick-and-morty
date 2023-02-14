import React from "react"

const Character = ({ character }) => {
  return (
    <div class="leter">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </div>
  )
}
export default Character