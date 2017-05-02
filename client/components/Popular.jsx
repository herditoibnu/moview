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
          <Grid.Row>
            <Header as='h2'>Popular</Header>
          </Grid.Row>
          <Body/>
          <Footer/>
        </Grid>
      </Container>
    );
  }
}