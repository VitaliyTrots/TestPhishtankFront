import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import TestURL from "../pages/TestURL"

// ---

export default function AppNavigation() {
  const [dashboardData, setDashboardData] = useState({})
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TestURL onFetch={setDashboardData}/>
        </Route>

        <Route exact path="/dashboard">
          <Dashboard dashboardData={dashboardData}/>
        </Route>

        <Route>
          404 <Link to="/">back to root</Link>
        </Route>
      </Switch>
    </Router>
  )
}
