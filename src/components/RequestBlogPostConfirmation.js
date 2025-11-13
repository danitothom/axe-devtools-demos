import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FieldWrap, Main, Icon, Button } from '@deque/cauldron-react'
import './RequestBlogPostConfirmation.css'

const RequestBlogPostConfirmation = () => {
  const [searchParams] = useSearchParams()

  return (
    <Main id="main-content" aria-labelledby="main-heading" tabIndex={-1}>
      <h1 id="main-heading">Request Blog Post Confirmation</h1>
      <FieldWrap className="blog-confirmation">
        <p>
          <Icon type="check-circle" />
          Blog post request for &quot;{searchParams.get('subject')}&quot; has
          been received.
        </p>
        <p>
          <Link to="/request-blog">Submit another request</Link>
        </p>
      </FieldWrap>
      <br />
      <Button variant="secondary">
        <Icon type="question-circle" />
      </Button>
      <Button variant="secondary">
        <Icon type="info-circle" />
      </Button>
    </Main>
  )
}
export default RequestBlogPostConfirmation
