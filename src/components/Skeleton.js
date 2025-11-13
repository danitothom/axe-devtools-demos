import React from 'react'
import { Layout, NavItem, Icon, NavBar } from '@deque/cauldron-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Skeleton.css'

const Skeleton = () => {
  const location = useLocation()
  const paths = React.useMemo(() => {
    const { pathname } = location

    return {
      dashboardIsActive: pathname === '/',
      blogIsActive: pathname.startsWith('/blog'),
      settingsIsActive: pathname === '/settings',
    }
  }, [location])

  return (
    <div className="App">
      <NavBar className="TopBar">
        <NavItem active={paths.dashboardIsActive}>
          <Link to="/">
            <Icon type="info-circle" />
            Dashboard
          </Link>
        </NavItem>
        <NavItem active={paths.blogIsActive}>
          <Link to="/blog">
            <Icon type="clipboard" />
            Blog
          </Link>
        </NavItem>
        <NavItem
          active={paths.settingsIsActive}
          className={`NavItem Align--right ${
            paths.settingsIsActive ? 'NavItem--active' : ''
          }`}
        >
          <Link to="/settings">
            <Icon type="gears" />
            Settings
          </Link>
        </NavItem>
      </NavBar>
      <Layout>
        <Outlet />
      </Layout>
      <footer className="Footer">
        <p>Awesome Recipes Inc.</p>
        <div>
          <a href="https://github.com/dequelabs">
            <Icon type="github" />
          </a>
          <a href="https://linkedin.com/deque">
            <Icon type="linkedin" />
          </a>
        </div>
        <div>
          <label className="Field__label">Site Search</label>
          <input
            type="text"
            className="Field__text-input"
            aria-label="text-field"
          />
        </div>
      </footer>
    </div>
  )
}

export default Skeleton
