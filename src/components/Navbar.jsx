import React from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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
    <div className="nav__actions">
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

			<div className="search-weather__container">
				<TextField
						className="search-weather__input"
						hintText="Search Weather"
						inputStyle={ { color: '#fff' }}
						hintStyle={{ color: "#bdbdbd"}}
						underlineFocusStyle={{ borderColor: '#E91E63' }}/>

				<RaisedButton
					label="Search"
					style={ navButtonsStyles }
					onClick={ e => console.log(e)}/>
			</div>

    </div>
  );
}

const Navbar = props => {
  return (
    <AppBar
        title="React Weather App"
        showMenuIconButton={false}
        iconElementRight={ <NavButtons /> }
        iconStyleRight={ navButtonsContainerStyles }/>
  );
};

export default Navbar;
