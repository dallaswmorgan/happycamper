import React from 'react';
import assign from 'lodash/assign';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

const modalStyle = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      image_url: "https://res.cloudinary.com/dallaswmorgan/image/upload/v1484816721/Logomakr_5YRquQ_t90pks.png"
    };
    this.formType = this.props.formType;
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);

  }

  componentWillReceiveProps(newProps) {
    this.formType = newProps.formType;
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  handleSignupSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleSession(nextForm) {
    if (nextForm === "signup") {
      this.formType = "signup";
    } else {
      this.formType = "login";
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => {
            return(
              <li key={`error-${i}`}>
                {error}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  loginForm() {
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleLoginSubmit} className="session-form-box">
          <h2>Welcome back!</h2>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                placeholder=" Email..."
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"/>
            <br/>
              <input type="password"
                placeholder=" Password..."
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"/>
            <br/>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    );
  }

  signupForm() {
    return(
      <div className="session-form-container">
        <form onSubmit={this.handleSignupSubmit} className="session-form-box">
          <h2>Join Happy Camper</h2>
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
              <input type="text"
                placeholder=" First name..."
                value={this.state.fname}
                onChange={this.update("fname")}
                className="signup-input"/>
            <br/>
              <input type="text"
                placeholder=" Last name..."
                value={this.state.lname}
                onChange={this.update("lname")}
                className="signup-input"/>
            <br/>
              <input type="text"
                placeholder=" Email..."
                value={this.state.email}
                onChange={this.update("email")}
                className="signup-input"/>
            <br/>
              <input type="password"
                placeholder=" Password..."
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"/>
            <br/>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    if (this.formType === "login") {
      return this.loginForm();
    } else {
      return this.signupForm();
    }
  }
}

export default SessionForm;
