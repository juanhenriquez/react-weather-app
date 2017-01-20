import React from 'react';
import { Link, IndexLink } from 'react-router';
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
      <FlatButton 
          label="Get Weather" 
          style={ navButtonsStyles } 
          activeClassName="active"
          containerElement={ <IndexLink to="/" /> }/>

      <FlatButton 
          label="About" 
          style={ navButtonsStyles }
          activeClassName="active"
          containerElement={ <Link to="/about" /> }/>

      <FlatButton 
          label="Examples" 
          style={ navButtonsStyles }
          activeClassName="active"
          containerElement={ <Link to="/examples" /> }/>
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
