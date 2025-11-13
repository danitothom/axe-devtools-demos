import React from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton, TextField } from '@deque/cauldron-react'
import Modal, { ModalContent, ModalFooter } from './Modal'

const EditRecipeModal = ({
  show,
  recipe,
  heading,
  onClose,
  onIngredientAdd,
  onInstructionAdd,
  onSubmit,
  instructions,
  ingredients,
  onIngredientDelete,
  onInstructionDelete,
  ingredientRefs,
  instructionRefs,
  ingredientErrors,
  instructionErrors,
}) => {
  return (
    <Modal show={show} heading={heading} onClose={onClose}>
      <form onSubmit={onSubmit} noValidate>
        <ModalContent>
          <h3 id={`${recipe.name}-edit-ingredients`}>Ingredients</h3>
          <div
            className="RecipeModal__group"
            tabIndex={-1}
            aria-labelledby={`${recipe.name}-edit-ingredients`}
          >
            {ingredients.map((ingredient, index) => (
              <div className="RecipeModalItem" key={`${ingredient}-${index}`}>
                <TextField
                  label="Ingredient"
                  defaultValue={ingredient}
                  error={ingredientErrors[index] ? 'Field required' : null}
                  ref={(el) => (ingredientRefs.current[index] = el)}
                />

                <IconButton
                  onClick={() => onIngredientDelete(index)}
                  icon="trash"
                  label="Delete"
                />
              </div>
            ))}
          </div>
          <div className="RecipeModal__add-another">
            <Button variant="link" onClick={onIngredientAdd}>
              + Add another ingredient
            </Button>
          </div>
          <h3 id={`${recipe.name}-edit-instructions`}>Instructions</h3>
          <div
            className="RecipeModal__group"
            tabIndex={-1}
            aria-labelledby={`${recipe.name}-edit-instructions`}
          >
            {instructions.map((instruction, index) => (
              <div className="RecipeModalItem" key={`${instruction}-${index}`}>
                <TextField
                  multiline
                  label="Instruction"
                  defaultValue={instruction}
                  error={instructionErrors[index] ? 'Field required' : null}
                  ref={(el) => (instructionRefs.current[index] = el)}
                />
                <IconButton
                  onClick={() => onInstructionDelete(index)}
                  icon="trash"
                  label="Delete"
                />
              </div>
            ))}
          </div>
          <div className="RecipeModal__add-another">
            <Button variant="link" onClick={onInstructionAdd}>
              + Add another instruction
            </Button>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button type="submit">Save</Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

EditRecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  heading: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onIngredientAdd: PropTypes.func.isRequired,
  onInstructionAdd: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  instructions: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  onIngredientDelete: PropTypes.func.isRequired,
  onInstructionDelete: PropTypes.func.isRequired,
  ingredientRefs: PropTypes.object.isRequired,
  instructionRefs: PropTypes.object.isRequired,
  ingredientErrors: PropTypes.array.isRequired,
  instructionErrors: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired,
}
export default EditRecipeModal
