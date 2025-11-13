import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  FieldWrap,
  Main,
  RadioGroup,
  Toast,
} from '@deque/cauldron-react'
import questionMark from '../img/icons/question-circle.png'

const Settings = ({
  onThemeChange,
  onSettingsSubmit,
  currentThemeSelection,
}) => {
  const [showSuccess, setShowSuccess] = React.useState(false)

  const handleSubmit = (e) => {
    onSettingsSubmit(e)
    setShowSuccess(true)
  }

  const handleSuccessToastDismiss = () => {
    setShowSuccess(false)
  }

  return (
    <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
      {showSuccess && (
        <Toast show type="confirmation" onDismiss={handleSuccessToastDismiss}>
          Settings saved successfully.
        </Toast>
      )}
      <h1 id="main-heading">Settings</h1>
      <form onSubmit={handleSubmit}>
        <FieldWrap>
          <h2 id="theme-group-label">Theme</h2>
          <img style={{ display: 'none' }} src={questionMark} alt="" />
          <RadioGroup
            role="group"
            aria-labelledby="theme-group-label"
            value={currentThemeSelection}
            onChange={onThemeChange}
            inline
            radios={[
              {
                label: 'Dark',
                value: 'dark',
                name: 'theme',
              },
              {
                label: 'Light',
                value: 'light',
                name: 'theme',
              },
            ]}
          />
          {/* <Button variant="secondary">
            <img src={questionMark} />
          </Button> */}
          <br />
          <Button type="submit">Submit</Button>
        </FieldWrap>
      </form>
    </Main>
  )
}

Settings.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  onSettingsSubmit: PropTypes.func.isRequired,
  currentThemeSelection: PropTypes.string.isRequired,
}

export default Settings
