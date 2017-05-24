import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Header,
  Segment,
  Label,
  Rating,
  Container,
  Form,
  Image,
  TextArea,
  Button,
  Comment
} from 'semantic-ui-react';
import { login } from '../actions/action.jsx';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmitClick(event) {
    console.log("SUBMIT")
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  onChangeEmail(event, data) {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword(event, data) {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{maxWidth: "450px"}}>
          <h2 className="ui teal image header">
            <img src="/client/assets/logo.png" style={{width: "150px", height: "auto"}}/>
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" onChange={this.onChangeEmail.bind(this)} required="true"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" onChange={this.onChangePassword.bind(this)} required="true"/>
                </div>
              </div>
              <div className="ui fluid large teal submit button" type="submit" onClick={this.onSubmitClick.bind(this)}>Login</div>
            </div>
            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            New to us? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // movies: state.reducer.get('movies'),
    // user: state.reducer.get('user').toJS(),
    // users: state.reducer.get('users').toJS()
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    loadSpecificSection: (section) => dispatch(loadSpecificSection(section))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));