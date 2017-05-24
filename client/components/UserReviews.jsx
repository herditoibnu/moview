import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Header,
  Segment,
  Input,
  Label,
  Rating,
  Container,
  Form,
  Image,
  TextArea,
  Button,
  Comment
} from 'semantic-ui-react';
import { insertReview } from '../actions/action.jsx';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (<Rating icon='star' maxRating={5}/>);
  }
}

class UserReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      reviews: _.reverse(this.props.reviews),
      commentText: '',
      rating: 0,
      namauser: ""
    })
  }

  componentWillUpdate(nextProps, nextState) {
    // cari review berdasar movies id dari redux
    this.props.movies.map((movie) => {
      if (movie.id === this.props.movidId) {
        this.setState({
          reviews: movie.reviews
        })
      }
      return movie;
    })
  }
  
  renderReviews() {
    return this.state.reviews.map((review) => {
      console.log(review)
      return (
          <Comment key={review.id}>
            <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>{review.namauser}</Comment.Author>
              <Comment.Metadata>
                <div>
                  <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled/>
                </div>
              </Comment.Metadata>
              <Comment.Text>{review.comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        );
    })
  }

  ratingForm() {
    return (
      <Rating maxRating={5}/>
    );
  }

  onSubmitClick(event) {
    event.preventDefault();
    this.setState({
      commentText: ""
    })
    this.props.insertReview(this.props.movieId, this.state.rating, this.state.commentText, 1, this.state.namauser);
  }

  handleChange(event) {
    this.setState({
      commentText: event.target.value
    })
  }

  handleChangeUser(event) {
    this.setState({
      namauser: event.target.value
    })
  }

  handleRateChange(event, data) {
    console.log(data);
    this.setState({
      rating: data.rating
    })
  }

  render() {
    return (
      <Container>
        <Form reply onSubmit={this.onSubmitClick.bind(this)} style={{width: "100%"}}>
          <Grid className="grid-comment-modal">
            <Grid.Column width={3}>
              <Grid.Row>
                <Image src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' className="img-user-comment"/>
              </Grid.Row>
              <Grid.Row>
                <Rating icon='star' maxRating={5} onRate={this.handleRateChange.bind(this)}/>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={13}>
              <Grid.Row>
                <Form.TextArea value={this.state.commentText} 
                  onChange={this.handleChange.bind(this)} 
                  id='form-comment'
                  style={{ width: "100%" }}/>
              </Grid.Row>
              <Grid.Row>
                <Input placeholder='Your name..' onChange={this.handleChangeUser.bind(this)} style={{marginTop: "5px",float: "left"}}/>
                <Button content='Review' labelPosition='left' icon='edit' style={{marginTop: "5px", float: "right"}} primary />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Form>

        <Segment raised>
          <Label as='h3' style={{backgroundColor: "#CDDC39"}} ribbon><h2  className="label-segment">Reviews</h2></Label>
          <span></span>
          <Comment.Group>
            {this.renderReviews()}
          </Comment.Group>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies'),
    user: state.reducer.get('user').toJS(),
    users: state.reducer.get('users').toJS()
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertReview: (idMovie, rating, comment, iduser, namauser) => dispatch(insertReview(idMovie, rating, comment, iduser, namauser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReviews);