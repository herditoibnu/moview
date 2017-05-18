import React from 'react';
import { 
  Grid, 
  Container,
  Header
} from 'semantic-ui-react';
import _ from 'lodash';
import Navigations from './navigation.jsx';
import Headers from './headers.jsx';
import Body from './body.jsx';
import AdvanceSearch from './advance-search.jsx';
import { 
  setFilterMovies
} from '../actions/action.jsx';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          2017
        </Grid.Column>
      </Grid.Row>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentWillMount = " + this.props.match.params.genreCustom);
    if (this.props.match.params.genreCustom) {
      this.props.setFilterMovies({ 
        genre: this.props.match.params.genreCustom 
      }, true);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate = " + nextProps.match.params.genreCustom);
    nextProps.setFilterMovies({
        genre: nextProps.match.params.genreCustom
      }, true);
  }

  render() {
    return (
      <Container>
        <Grid columns='equal' padded>
          <Headers/>
          <Navigations/>
          <AdvanceSearch/>
          <Grid.Row>
            <Header as='h2'>{this.props.match.params.genreCustom}</Header>
          </Grid.Row>
          <Body/>
          <Footer/>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeGenre: state.reducer.get('activeGenre')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterMovies: (filter, isReplaced) => {
      return dispatch(setFilterMovies(filter, isReplaced));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);