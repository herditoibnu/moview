import React from 'react';
import {
  Grid,
  Button,
  Header,
  Search,
  Container
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { 
  
} from '../actions/action.jsx';
import {
  FORUM_ADDRESS
} from '../const/actions.jsx';
import {
  Link
} from 'react-router-dom';

class Headers extends React.Component {
  constructor(props) {
    super(props);
    
    let movies = this.props.movies.map(movie => {
      movie.key = movie.id;
      return movie;
    })
  }

  componentWillMount() {
    this.resetComponent.bind(this);
    this.setState({ isLoading: false, results: [], value: '' });
    
    this.setState({
      movies: this.props.movies
    })
  }

  resetComponent() {
    return this.setState({ isLoading: false, results: [], value: '' });
  }

  handleResultSelect(e, result) {
    return this.setState({ value: result.name })
  }

  handleSearchChange(e, value) {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent.bind(this)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)

      console.log(this.state.movies)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.movies, isMatch),
      })
    }, 500)
  }

  renderUser() {
    if (this.props.user.name) {
      return (
        <div style={{float:"right", marginTop: "1.7%"}}>
          <a href={FORUM_ADDRESS+"forums/logout"}>
            <Button inverted style={{float:"right"}}>Logout</Button>
          </a>
          <Header as='h4' style={{float:"right", marginRight: "10px", marginTop: "10px", color: "white"}}>Hi, {this.props.user.name}</Header>
        </div>
      );
    }

    return (
      <div style={{float:"right", marginTop: "1.7%"}}>
        <Link to={'/login'}>
          <Button inverted >Login</Button>
        </Link>
        <Link to={'/register'}>
          <Button inverted >Register</Button>
        </Link>
      </div>
    );
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid.Row style={{backgroundColor: "#2196F3", padding: "0px", height: "80px"}}>
        <Container>
          <Grid.Column width={4}>
            <img src="client/assets/logo.png" style={{width: "150px", height: "auto"}}/>
            {this.renderUser()}
          </Grid.Column>
        </Container>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies').toJS(),
    user: state.reducer.get('user').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);