import React from 'react';
import { 
  Grid, 
  Container
} from 'semantic-ui-react';
import _ from 'lodash';
import Navigations from './navigation.jsx';
import Headers from './headers.jsx';
import AdvanceSearch from './advance-search.jsx';
import Body from './body.jsx';

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

export default class Main extends React.Component {
  render() {
    return (
      <Container>
        <Grid columns='equal' padded>
          <Headers/>
          <Navigations/>
          <AdvanceSearch/>
          <Body/>
          <Footer/>
        </Grid>
      </Container>
    );
  }
}