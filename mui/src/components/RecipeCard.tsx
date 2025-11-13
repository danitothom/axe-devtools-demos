import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Typography,
} from '@mui/material'
import CookingRecipeModal from './CookingRecipeModal'
import useModal from './hooks/useModal'
import type { Recipe } from '../data'

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isOpen, toggle] = useModal()
  return (
    <>
      <Grid item xs={4}>
        <Card>
          <CardMedia
            component="img"
            image={recipe.img}
            alt={recipe.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={toggle}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <CookingRecipeModal open={isOpen} handleClose={toggle} recipe={recipe} />
    </>
  )
}

export default RecipeCard
