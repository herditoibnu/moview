import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {browserHistory} from 'react-router';

class Navigations extends React.Component {
  constructor(props) {
    super(props);
    
  }

  handleClick(event) {
    console.log("Clicked!");
  }

  renderGenres() {
    return _.map(this.props.genres, genre => {
      return (
          <Link key={genre.id} to={"/genre/" + genre.name}>
            <Dropdown.Item>{genre.name}</Dropdown.Item>
          </Link>
        );
      }
    )
  }

  render() {
    return (
      <Grid.Row>
        <Menu borderless>
          <Link to="/">
            <Menu.Item> 
              Home
            </Menu.Item>
          </Link>

          <Dropdown item text='Genre'>
            <Dropdown.Menu>
              {this.renderGenres()}
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/popular">
            <Menu.Item> 
              Popular
            </Menu.Item>
          </Link>

          <Link to="/genre/dfgbdgbdjhgbdfjhgd">
            <Menu.Item> 
              Popular
            </Menu.Item>
          </Link>
        </Menu>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.reducer.get('genres').toJS()
  }
}

export default connect(mapStateToProps)(Navigations);
