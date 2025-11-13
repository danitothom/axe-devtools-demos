import React from 'react'
import {
  Button,
  FieldWrap,
  Main,
  RadioGroup,
  TextField,
  Accordion,
  AccordionTrigger,
  AccordionContent,
} from '@deque/cauldron-react'
import { useNavigate } from 'react-router-dom'

const RequestBlogPost = () => {
  const navigate = useNavigate()
  const [followUpValue, setFollowUpValue] = React.useState('yes')
  const [emailValue, setEmailValue] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [subjectError, setSubjectError] = React.useState('')
  const [subjectValue, setSubjectValue] = React.useState('')
  const onFollowUpChange = (radio) => setFollowUpValue(radio.value)
  const onEmailChange = (value) => setEmailValue(value)
  const onSubjectChange = (value) => setSubjectValue(value)
  const handleSubmit = (e) => {
    e.preventDefault()
    let hasError = false

    // clear previous error state
    setEmailError('')
    setSubjectError('')

    if (!emailValue) {
      setEmailError('Email is required')
      hasError = true
    }

    if (!subjectValue) {
      setSubjectError('Subject is required')
      hasError = true
    }

    if (hasError) {
      return
    }

    navigate(`/request-blog/confirmation?subject=${subjectValue}`)
  }

  return (
    <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
      <h1 id="main-heading">Request New Blog Post</h1>
      <form onSubmit={handleSubmit} noValidate>
        <FieldWrap>
          <TextField
            required
            label="Email"
            value={emailValue}
            onChange={onEmailChange}
            error={emailError}
          />
          <TextField
            required
            label="Blog subject"
            value={subjectValue}
            onChange={onSubjectChange}
            error={subjectError}
          />
          <h2 id="can-follow-up">Can we follow up with you?</h2>
          <RadioGroup
            role="group"
            onChange={onFollowUpChange}
            aria-labelledby="can-follow-up"
            value={followUpValue}
            radios={[
              {
                label: 'Yes',
                value: 'yes',
                name: 'follow-up',
              },
              {
                label: 'No',
                value: 'no',
                name: 'follow-up',
              },
            ]}
          />
          <Accordion>
            <AccordionTrigger>
              Additional information (optional)
            </AccordionTrigger>
            <AccordionContent>
              <TextField
                label="Additional Resources (links, background info, etc.)"
                multiline
              />
            </AccordionContent>
          </Accordion>
          <br />
          <Button type="submit">Submit</Button>
        </FieldWrap>
      </form>
    </Main>
  )
}
export default RequestBlogPost
