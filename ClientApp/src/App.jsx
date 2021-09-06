import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'
import { NewLocation } from './pages/NewLocation'
import { SearchResults } from './pages/SearchResults'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <SearchResults />
      </Route>
      <Route exact path="/new">
        <NewLocation />
      </Route>
    </Switch>
  )
}