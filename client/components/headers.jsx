import React from 'react';
import {
  Grid,
  Search
} from 'semantic-ui-react';

class Headers extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={4}>
          <h2 style={{ margin: 3 }}>Moview</h2>
          <h5 style={{ margin: 3 }}>Movie Review</h5>
        </Grid.Column>
        <Grid.Column width={8}>
          <Search style={{ width: 500 }}/>
        </Grid.Column>
        <Grid.Column width={9}>
          
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Headers;