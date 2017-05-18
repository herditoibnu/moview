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
      <Grid.Row className="footer">
		<Grid.Column>        				
      		<Image src="client/assets/footer1.png" className="img-footer"/>
      	</Grid.Column>

		<Grid.Column>
      		<Image src="client/assets/footer2.png" className="img-footer"/>
      	</Grid.Column>

		<Grid.Column>
      		<Image src="client/assets/footer3.png" className="img-footer"/>
      	</Grid.Column>

		<Grid.Column>
      		<Image src="client/assets/footer4.png" className="img-footer"/>
      	</Grid.Column>

		<Grid.Column>
      		<Image src="client/assets/footer5.png" className="img-footer"/>
      	</Grid.Column>
      </Grid.Row>
    );
  }
}
