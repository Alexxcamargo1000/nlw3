import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
     return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/create" component={CreateOrphanage} />

          </Switch>
        </BrowserRouter>
     );
}

export default Routes