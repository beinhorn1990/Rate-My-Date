import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import './custom.scss'
import { NewLocation } from './pages/NewLocation'
import { SearchResults } from './pages/SearchResults'
import { Homepage } from './pages/Homepage'
import { Location } from './pages/LocationPage'
import { Delete } from './pages/Delete'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchResults />
      </Route>
      <Route exact path="/new">
        <NewLocation />
      </Route>
      <Route exact path="/home">
        <Homepage />
      </Route>
      <Route exact path="/location">
        <Location />
      </Route>
      <Route exact path="/delete">
        <Delete />
      </Route>
    </Switch>
  )
}