import React from 'react'
import { Grid } from '@mui/material'
import RecipeCard from './components/RecipeCard'
import Appbar from './components/Appbar'
import data from './data'

const App = () => {
  return (
    <>
      <Appbar />
      <div style={{ paddingLeft: '3vw', paddingRight: '3vw' }}>
        <Grid container spacing={4}>
          {data.map((recipe, index) => (
            <RecipeCard key={recipe.name + index} recipe={recipe} />
          ))}
        </Grid>
      </div>
    </>
  )
}

export default App
