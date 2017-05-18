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
import Footer from './footer.jsx';
import { 
  setFilterMovies
} from '../actions/action.jsx';
import { connect } from 'react-redux';
import styles from '../assets/styles.css';

class Main extends React.Component {
  componentWillMount() {
    this.props.setFilterMovies({}, true);
  }

  render() {
    return (
      <div>
        <Grid columns='equal' padded>
          <Headers/>
          <Navigations/>
          <AdvanceSearch/>
          <Body/>
          <Footer/>
        </Grid>
      </div>
    );

    // return (
    //   <Container>
    //     <Grid columns='equal' padded>
    //       <Headers/>
    //       <Navigations/>
    //       <AdvanceSearch/>
    //       <Grid.Row>
    //         <Header as='h2'>New Release</Header>
    //       </Grid.Row>
    //       <Body/>
    //       <Footer/>
    //     </Grid>
    //   </Container>
    // );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterMovies: (filter, isReplaced) => {
      return dispatch(setFilterMovies(filter, isReplaced));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);