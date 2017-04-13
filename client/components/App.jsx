import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import _ from 'lodash';

class Headers extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column color="violet">
          Header
        </Grid.Column>
      </Grid.Row>
    );
  }
}

class Navigations extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column color="yellow">
          3
        </Grid.Column>
      </Grid.Row>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column color="blue">
          Body
        </Grid.Column>
      </Grid.Row>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column color="brown">
          Footer
        </Grid.Column>
      </Grid.Row>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Grid columns='equal' padded>
          <Headers/>
          <Navigations/>
          <Body/>
          <Footer/>
        </Grid>
      </Container>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}