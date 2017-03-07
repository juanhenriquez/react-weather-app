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

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  onSearch = (e) => {
    e.preventDefault();
    const location = this.refs.search.input.value;
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.input.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  };

  render () {
    return (
      <AppBar
          title="React Weather App"
          showMenuIconButton={false}
          iconElementRight={
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
                    ref="search"
                    inputStyle={ { color: '#fff' }}
                    hintStyle={{ color: "#bdbdbd"}}
                    underlineFocusStyle={{ borderColor: '#E91E63' }}/>

                <RaisedButton
                  label="Search"
                  style={ navButtonsStyles }
                  onClick={ e => this.onSearch(e) }/>
              </div>

            </div>
          }
          iconStyleRight={ navButtonsContainerStyles }/>
    );
  }
};

export default Navbar;
