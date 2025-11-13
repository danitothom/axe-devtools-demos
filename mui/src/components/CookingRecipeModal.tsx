import React from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import type { Recipe } from '../data'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1, width: '100%' },
}

interface Props {
  open: boolean
  handleClose: () => void
  recipe: Recipe
}

const CookingRecipeModal = ({ open, handleClose, recipe }: Props) => {
  return (
    <Modal open={open} onClose={handleClose} keepMounted>
      <Box sx={style}>
        <Typography id="recipe-title" variant="h4" component="h1">
          Cooking {recipe.name}
        </Typography>
        <Typography
          id="ingredient-title"
          variant="h6"
          component="h2"
          sx={{ mt: 2 }}
        >
          Ingredients
        </Typography>
        <Typography id="ingredient-list" sx={{ mt: 2 }}>
          <ul>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={`${ingredient}-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </Typography>
        <Typography id="instruction-title" variant="h6" component="h2">
          Instructions
        </Typography>
        <Typography id="instruction-list" sx={{ mt: 2 }}>
          <ol>
            {recipe.instructions.map((instruction: string, index: number) => (
              <li key={`${instruction}-${index}`}>{instruction}</li>
            ))}
          </ol>
        </Typography>
        <TextField
          id="yumminess-rating"
          label="Yumminess Rating"
          type="number"
          value={recipe.yumminess}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0,
            max: 50,
          }}
          variant="outlined"
          sx={{ mt: 2 }}
          size="small"
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}

export default CookingRecipeModal
