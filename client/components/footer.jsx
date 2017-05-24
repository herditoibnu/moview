import React from 'react';
import { 
  Grid, 
  Container,
  Header,
  Image
} from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid.Row style={{height:"120px", backgroundColor: "#2196F3"}}>
        <Container>
          <Grid columns={5}>
            <Grid.Column>
              <Image src="client/assets/footer1.png" width="80" height="auto" className="img-footer"/>
            </Grid.Column>

            <Grid.Column>
              <Image src="client/assets/footer2.png" width="80" height="auto" className="img-footer"/>
            </Grid.Column>

            <Grid.Column>
              <Image src="client/assets/footer3.png" width="80" height="auto" className="img-footer"/>
            </Grid.Column>

            <Grid.Column>
              <Image src="client/assets/footer4.png" width="80" height="auto" className="img-footer"/>
            </Grid.Column>

            <Grid.Column>
              <Image src="client/assets/footer5.png" width="80" height="auto" className="img-footer"/>
            </Grid.Column>
          </Grid>
          <Grid style={{textAlign:"center"}} columns={3}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column style={{paddingTop: "0px"}}>
              <p>2017 Copyright. All Right Reserved</p>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid>
        </Container>
      </Grid.Row>
    );
  }
}
