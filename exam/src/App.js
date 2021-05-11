import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar.js'
import Footer from './components/footer/Footer.js'

import Home from './views/home/Home.js'
import Tictactoe from './views/tictactoe/Tictactoe.js'
import Tower from './views/tower/Tower.js'
import Snek from './views/snek/Snek.js'

import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <section className='app-wrapper'>
          <Sidebar />

          <main className='app-main'>
            <section className='app-section'>
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/home' />
                </Route>

                <Route path='/home'>
                  <Home />
                </Route>
                <Route path='/tictactoe'>
                  <Tictactoe />
                </Route>
                <Route path='/tower'>
                  <Tower />
                </Route>
                <Route path='/snek'>
                  <Snek />
                </Route>
              </Switch>
            </section>

            <Footer />
          </main>
        </section>
      </Router>
    )
  }
}
