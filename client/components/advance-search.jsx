import React from 'react';
import { connect } from 'react-redux';
import { 
  Grid,
  Container,
  Menu,
  Rating,
  Segment,
  Input,
  Button,
  Form,
  Header,
  Dropdown
} from 'semantic-ui-react';
import _ from 'lodash';
import styles from '../assets/styles.css';
import {
  fetchStars,
  fetchGenres,
  fetchDirectors,
  setFilterMovies
} from '../actions/action.jsx';

const directors = [{
  key: '0', value: 'All Directors', text: 'All Directors'
},{
  key: '1', value: 'Al Zahrany', text: 'Al Zahrany'
}, {
  key: '2', value: 'Ahmed', text: 'Ahmed'
}];

const stars = [{
  key: '0', value: 'All Stars', text: 'All Stars'
}, {
  key: '1', value: 'Fourir Akbar', text: 'Fourir Akbar'
}, {
  key: '2', value: 'Afif Ridho', text: 'Afif Ridho'
}];

const genres = [{
  key: '0', value: 'All Genres', text: 'All Genres'
},{
  key: '1', value: 'Animation', text: 'Animation'
},{
  key: '2', value: 'Family', text: 'Family'
}];

const MOOD_LIST = [{
  key: '0', value: 'All Moods', text: 'All Moods'
}, {
  key: '1', value: 'Happy', text: 'Happy'
}, {
  key: '2', value: 'Angry', text: 'Angry'
}, {
  key: '3', value: 'Sad', text: 'Sad'
}, {
  key: '4', value: 'Optimistic', text: 'Optimistic' 
}, {
  key: '5', value: 'Lazy', text: 'Lazy'
}]

const yearRange = function() {
  let years = [];
  for (let i = 1970; i <= 2017; i++) {
    years.push(i);
  }

  return _.map(years, (year) => {
    return {
      key: year,
      value: year,
      text: year
    }
  })
}

class AdvanceSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'movies',
      title: '',
      star: 'All Stars',
      genre: 'All Genres',
      mood: 'All Moods',
      director: 'All Directors',
      rating: null,
      yearFrom: null,
      yearTo: null,
      loading: false
    }
  }

  componentWillMount() {
    this.props.fetchStars();
    this.props.fetchDirectors();
  }

  handleItemClick(category) {
    this.setState({
      activeItem: category
    })
  }

  unloading(){
      this.setState({
        loading: false
      })

      let category = this.state.activeItem, 
        title = null,
        star = null, 
        genre = null, 
        rating = null, 
        mood = null,
        director = null,
        yearFrom = null,
        yearTo = null;

      if (this.state.title.length > 0) {
        title = this.state.title;
      }

      if (this.state.star !== 'All Stars') {
        star = this.state.star;
      }

      if (this.state.genre !== 'All Genres') {
        genre = this.state.genre;
      }

      if (this.state.rating !== null) {
        rating = this.state.rating;
      }

      if (this.state.mood !== 'All Moods') {
        mood = this.state.mood;
      }

      if (this.state.director !== 'All Directors') {
        director = this.state.director;
      }

      if (this.state.yearFrom) {
        yearFrom = this.state.yearFrom;
      } else {
        yearFrom = 1900;
      }

      if (this.state.yearTo) {
        yearTo = this.state.yearTo;
      } else {
        yearTo = 2017;
      }

      let filter = {
        category: category,
        title: title,
        star: star,
        genre: genre,
        rating: rating,
        mood: mood,
        director: director,
        yearFrom: yearFrom,
        yearTo: yearTo
      }

      this.props.setFilterMovies(filter, true);
  }

  onSubmitClick(event) {
    event.preventDefault();

    this.setState({
      loading: true
    })

    setTimeout(
      this.unloading.bind(this)
    , 200);

    console.log("onSubmit()")

  }

  onChangeDirector(event, data) {
    if (data.value) {
      this.setState({
        director: data.value
      });
    }
  }

  onChangeStar(event, data) {
    if (data.value) {
      this.setState({
        star: data.value
      });
    }
  }

  onChangeGenre(event, data) {
    if (data.value) {
      console.log(data.value);
      this.setState({
        genre: data.value
      });
    }
  }

  onChangeYearFrom(event, data) {
    if (data.value) {
      this.setState({
        yearFrom: data.value
      });
    }
  }

  onChangeYearTo(event, data) {
    if (data.value) {
      this.setState({
        yearTo: data.value
      });
    }
  }

  onChangeMood(event, data) {
    if (data.value) {
      this.setState({
        mood: data.value
      });
    }
  }

  onChangeTitle(event, data) {
    console.log(data.value)
    this.setState({
      title: data.value
    })
  }

  handleRateChange(event, data) {
    this.setState({
      rating: data.rating
    });
  }

  render() {
    return (
      <Grid.Row className="search-container">
        <Container style={{margin: "auto"}}>
          <div style={{width : "100%"}}>
            <Menu attached='top' tabular >
              <Menu.Item name='movies' active={this.state.activeItem === 'movies'} 
                onClick={this.handleItemClick.bind(this, 'movies')} />
              <Menu.Item name='series' active={this.state.activeItem === 'series'} 
                onClick={this.handleItemClick.bind(this, 'series')} />
              <Menu.Menu position='right'>
                <Menu.Item >
                  <p className="caption-search">Find your favorite <b>Movie Review</b> here!</p>
                </Menu.Item>
              </Menu.Menu>
            </Menu>

            <Segment attached='bottom'>
              <Form onSubmit={this.onSubmitClick.bind(this)}>
                <Grid columns={2} style={{paddingTop: "10px", paddingBottom: "10px"}}>
                  <Grid.Row className="column-row-search">
                    <Grid.Column> 
                      <Header as='h4'>
                        Title
                      </Header>
                      <Input className="form-advanced-search" 
                        onChange={this.onChangeTitle.bind(this)}
                        placeholder='Movie title..'/>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h4'>
                        Director
                      </Header>
                      <Dropdown className="form-advanced-search" fluid search selection options={this.props.directors}
                        onChange={this.onChangeDirector.bind(this)}
                        placeholder="Director.."
                        />
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row className="column-row-search">
                    <Grid.Column width={5}>
                      <Header as='h4'>
                        Stars
                      </Header>
                      <Dropdown className="form-advanced-search" fluid search selection options={this.props.stars}
                          onChange={this.onChangeStar.bind(this)}
                          placeholder="Starring by.."
                          />
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header as='h4'>
                        Genre
                      </Header>
                      <Dropdown className="form-advanced-search" fluid search selection options={this.props.genres}
                          onChange={this.onChangeGenre.bind(this)}
                          placeholder="Genre.."
                          />
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h4'>
                        Year
                      </Header>
                      <div>
                        From:
                        <div className="form-year">
                          <Dropdown className="form-year" fluid search selection options={yearRange()}
                            onChange={this.onChangeYearFrom.bind(this)}
                            placeholder="From.."
                            />
                        </div>
                        To:
                        <div className="form-year">
                          <Dropdown fluid search selection options={yearRange()}
                            onChange={this.onChangeYearTo.bind(this)}
                            placeholder="To.."
                            />
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className="column-row-search">
                    <Grid.Column width={5}>
                      <Header as='h4'>
                        Rating
                      </Header>
                      <Rating onRate={this.handleRateChange.bind(this)} maxRating={5} icon='star' size='massive'/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header as='h4'>
                        Mood
                      </Header>
                      <Dropdown fluid search selection options={MOOD_LIST}
                            onChange={this.onChangeMood.bind(this)}
                            placeholder="Mood.."
                            />
                    </Grid.Column>
                    <Grid.Column>
                      <div className="form-search-submit">
                        <Button content='Search' labelPosition='left' icon='search' loading={this.state.loading} primary />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            </Segment>
          </div>
        </Container>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stars: _.concat( {
      key: 0,
      value: 'All Stars',
      text: 'All Stars'
    },_.map(state.reducer.get('stars').toJS(), (star) => {
        return {
          key: star.id,
          value: star.name,
          text: star.name
        }
      })),
    genres: _.concat({
      key: 0,
      value: 'All Genres',
      text: 'All Genres'
    },_.map(state.reducer.get('genres').toJS(), (genre) => {
        return {
          key: genre.id,
          value: genre.name,
          text: genre.name
        }
      })),
    directors: _.concat( {
      key: 0,
      value: 'All Directors',
      text: 'All Directors'
    },_.map(state.reducer.get('directors').toJS(), (director) => {
        return {
          key: director.id,
          value: director.name,
          text: director.name
        }
      }))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStars: () => dispatch(fetchStars()),
    fetchGenres: () => dispatch(fetchGenres()),
    fetchDirectors: () => dispatch(fetchDirectors()),
    setFilterMovies: (filter, isReplace) => dispatch(setFilterMovies(filter, isReplace))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearch);