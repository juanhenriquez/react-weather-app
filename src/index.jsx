import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Material UI.
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeConfig from './theme';

// Root Component.
import App from './app.jsx';

// Child Components
import Weather from './components/Weather';

import './index.scss';

injectTapEventPlugin();

const muiTheme = getMuiTheme(muiThemeConfig);

render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Weather } />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.querySelector("#app")
);
