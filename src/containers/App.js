import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Skeleton from '../components/Skeleton'
import { getData, setData, getStats } from '../utils'
import Settings from '../components/Settings'
import NoMatch from '../components/NoMatch'
import Blog from '../components/Blog'
import BlogPost from '../components/BlogPost'
import RequestBlogPost from '../components/RequestBlogPost'
import RequestBlogPostConfirmation from '../components/RequestBlogPostConfirmation'

const CAULDRON_DARK_THEME_CLASS = 'cauldron--theme-dark'
const THEME_STORAGE_KEY = 'THEME_STORAGE_KEY'

const App = () => {
  const cachedDarkTheme = localStorage.getItem(THEME_STORAGE_KEY) === 'dark'
  const [recipes, setRecipes] = React.useState(getData())
  const [stats, setStats] = React.useState(getStats(recipes))
  const [isDarkTheme, setIsDarkTheme] = React.useState(cachedDarkTheme)
  const [currentThemeSelection, setCurrentThemeSelection] = React.useState(
    cachedDarkTheme ? 'dark' : 'light'
  )
  const [currentEditModal, setCurrentEditModal] = React.useState(null)
  const [currentViewModal, setCurrentViewModal] = React.useState(null)

  /**
   * Updates a recipe, specified by index and
   * saves it to local storage (our pseudo-db)
   */
  const updateRecipe = (index, updates) => {
    const updatedRecipes = [...recipes]
    updatedRecipes[index] = {
      ...updatedRecipes[index],
      ...updates,
    }
    setRecipes(updatedRecipes)
    setStats(getStats(updatedRecipes))
    // sync updates up with local storage
    setData(updatedRecipes)
  }

  const onThemeChange = (radio) => setCurrentThemeSelection(radio.value)
  const onSettingsSubmit = (e) => {
    e.preventDefault()
    setIsDarkTheme(currentThemeSelection === 'dark')
    localStorage.setItem(THEME_STORAGE_KEY, currentThemeSelection)
  }

  React.useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add(CAULDRON_DARK_THEME_CLASS)
    } else {
      document.body.classList.remove(CAULDRON_DARK_THEME_CLASS)
    }
  }, [isDarkTheme])

  return (
    <Routes>
      <Route path="/" element={<Skeleton />}>
        <Route
          index
          element={
            <Dashboard
              recipes={recipes}
              stats={stats}
              currentEditModal={currentEditModal}
              setCurrentEditModal={setCurrentEditModal}
              currentViewModal={currentViewModal}
              setCurrentViewModal={setCurrentViewModal}
              updateRecipe={updateRecipe}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              onThemeChange={onThemeChange}
              onSettingsSubmit={onSettingsSubmit}
              currentThemeSelection={currentThemeSelection}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/request-blog" element={<RequestBlogPost />} />
        <Route
          path="/request-blog/confirmation"
          element={<RequestBlogPostConfirmation />}
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
