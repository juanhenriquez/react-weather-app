import './index.scss';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Title" iconElementRight={ <div><FlatButton label="Save" /><FlatButton label="Save" /></div> }/>
        </MuiThemeProvider>
      </div>
    )
  }
}
