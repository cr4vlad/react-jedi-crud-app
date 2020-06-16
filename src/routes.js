import React from 'react'
import { Route, Switch } from 'react-router-dom'

import people from './pages/PeoplePage'
import planets from './pages/PlanetsPage'
import starships from './pages/StarshipsPage'

function BaseRouter () {
    return (
        <Switch>
            <Route exact path='/' component={people} />
            <Route path='/planets' component={planets} />
            <Route path='/starships' component={starships} />
            <Route>404 Page not found</Route>
        </Switch>
    )
}

export default BaseRouter;