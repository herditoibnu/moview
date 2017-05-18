import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Header,
  Dropdown,
  Menu,
  Container
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {browserHistory} from 'react-router';
import { 
  fetchGenres
} from '../actions/action.jsx';


class Navigations extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    this.props.fetchGenres();
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
      <Grid.Row style={{backgroundColor: "#1976D2"}}>
        <Container>
          <Grid>
            <Grid.Column>
              <Header as='h3'><a href="/" className="navigation-link">Home</a></Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'><a href="http://10.181.1.49:8000/forums" className="navigation-link">Forum</a></Header>
            </Grid.Column>
          </Grid>
        </Container>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.reducer.get('genres').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigations);