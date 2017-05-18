import React from 'react';
import {
  Grid,
  Button,
  Search,
  Container
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { 
  
} from '../actions/action.jsx';

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

  resultRenderer(a, b, c) {
    return (
      <div>
        {a}
        {b}
        {c}
      </div>
    )
  }

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid.Row style={{backgroundColor: "#2196F3", padding: "0px"}}>
        <Container>
          <Grid.Column width={4}>
            <img src="client/assets/logo.png" style={{width: "200px", height: "auto"}}/>
            <Button inverted style={{float:"right", marginTop: "3%"}}>Register</Button>
            <Button inverted style={{float:"right", marginTop: "3%"}}>Login</Button>
          </Grid.Column>
        </Container>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
