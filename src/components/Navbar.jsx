import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const navButtonsContainerStyles = {
  'marginTop': 0,
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center'
};

const navButtonsStyles = {
  'color': "#fff",
};

const NavButtons = () => {
  return (
    <div>
      <FlatButton label="Home" style={ navButtonsStyles }/>
      <FlatButton label="Weather" style={ navButtonsStyles }/>
      <FlatButton label="About" style={ navButtonsStyles }/>
    </div>
  );
}

class Navbar extends React.Component {
  render () {
    return (
      <AppBar
          title="React Weather App"
          showMenuIconButton={false}
          iconElementRight={ <NavButtons /> }
          iconStyleRight={ navButtonsContainerStyles }/>
    );
  }
}

export default Navbar;
