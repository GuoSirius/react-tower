import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

import './Sidebar.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { logo }
  }

  render() {
    return (
      <aside className='sidebar-wrapper'>
        <div className='sidebar-logo'>
          <img className='sidebar-logo-image' src={this.state.logo} alt='LOGO' />
        </div>

        <nav className='sidebar-nav'>
          <ul className='sidebar-nav-lists'>
            <li className='sidebar-nav-item'>
              <Link to='/home'>
                H<span>ome</span>
              </Link>
            </li>
            <li className='sidebar-nav-item'>
              <Link to='/tictactoe'>
                Ti<span>ctac</span>
              </Link>
            </li>
            <li className='sidebar-nav-item'>
              <Link to='/tower'>
                To<span>wer</span>
              </Link>
            </li>
            <li className='sidebar-nav-item'>
              <Link to='/snek'>
                S<span>nek</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}
