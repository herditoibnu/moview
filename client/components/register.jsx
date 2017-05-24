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
import { register } from '../actions/action.jsx';

class Register extends React.Component {
  constructor(props) {
    super(props); 
  }

  onSubmit(event) {
    this.props.register(this.state.name, this.state.email, this.state.password);
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

  onChangeName(event, data) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{maxWidth: "450px"}}>
          <h2 className="ui teal image header">
            <img src="/client/assets/logo.png" style={{width: "150px", height: "auto"}}/>
            <div className="content">
              Register
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="name" placeholder="Name" onChange={this.onChangeName.bind(this)} required="true"/>
                </div>
              </div>
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
              <div className="ui fluid large teal submit button">Register</div>
            </div>
            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.reducer.get('users').toJS()
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (name, email, password) => dispatch(register(name, email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);