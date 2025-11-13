import React from 'react'
import PropTypes from 'prop-types'
import pencil from '../img/icons/pencil.png'
import './RecipeCard.css'

const RecipeCard = ({ recipe, setCurrentEditModal, setCurrentViewModal }) => (
  <div className="Recipes__card">
    <div className="Recipes__card-head">
      <div
        onClick={() => {
          setCurrentEditModal(recipe.name)
        }}
        className="Recipes__card-edit"
        tabIndex={0}
      >
        <img src={pencil} className="edit" alt="Edit" />
      </div>
      <div className="Heading">{recipe.name}</div>
      <img src={recipe.image} className="Recipe__image" />
    </div>
    <div className="Recipes__card-content">
      <table>
        <tbody>
          <tr>
            <td className="theader">Prep time</td>
            <td>{recipe.prepTime}</td>
          </tr>
          <tr>
            <td className="theader">Cook time</td>
            <td>{recipe.cookTime}</td>
          </tr>
          <tr>
            <td className="theader">Difficulty</td>
            <td className={recipe.difficulty}>{recipe.difficulty}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="Recipes__card-foot" role="alert">
      <div
        className="Button--primary"
        onClick={() => setCurrentViewModal(recipe.name)}
      >
        <span className="BracketLeft" aria-hidden="true">
          [
        </span>
        <span>{`Cook ${recipe.name}`}</span>
        <span className="BracketRight" aria-hidden="true">
          ]
        </span>
      </div>
    </div>
  </div>
)

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  setCurrentEditModal: PropTypes.func.isRequired,
  setCurrentViewModal: PropTypes.func.isRequired,
}
export default RecipeCard
