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
      lname: ""
    };
    this.formType = this.props.formType;
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);

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
    // this.closeModal();
    if (nextForm === "signup") {
      this.formType = "signup";
    } else {
      this.formType = "login";
    }
    // this.openModal();
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  // render() {
  //
  //   if (this.props.formType === "login") {
  //     return (
  //       <div className="login-form-container">
  //         <form onSubmit={this.handleLoginSubmit} className="login-form-box">
  //           Welcome back to Happy Camper!
  //           <br/>
  //           {this.renderErrors()}
  //           <div className="login-form">
  //             <br/>
  //               <input type="text"
  //                 placeholder="Email"
  //                 value={this.state.email}
  //                 onChange={this.update("email")}
  //                 className="login-input"/>
  //             <br/>
  //               <input type="password"
  //                 placeholder="Password"
  //                 value={this.state.password}
  //                 onChange={this.update("password")}
  //                 className="login-input"/>
  //             <br/>
  //             <input type="submit" value="Log in"/>
  //           </div>
  //
  //           <div className="toggle-form">
  //             <p>{"Not a member yet? Sign up!"}
  //               <div
  //                 className="toggle-session"
  //                 onClick={this.toggleSession("signup")}/>
  //             </p>
  //           </div>
  //         </form>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="signup-form-container">
  //         <form onSubmit={this.handleSignupSubmit} className="signup-form-box">
  //           Welcome to Happy Camper!
  //           <br/>
  //           {this.renderErrors()}
  //           <div className="signup-form">
  //             <br/>
  //               <input type="text"
  //                 placeholder="First name"
  //                 value={this.state.fname}
  //                 onChange={this.update("fname")}
  //                 className="signup-input"/>
  //             <br/>
  //               <input type="text"
  //                 placeholder="Last name"
  //                 value={this.state.lname}
  //                 onChange={this.update("lname")}
  //                 className="signup-input"/>
  //             <br/>
  //               <input type="text"
  //                 placeholder="Email"
  //                 value={this.state.email}
  //                 onChange={this.update("email")}
  //                 className="signup-input"/>
  //             <br/>
  //               <input type="password"
  //                 placeholder="Password"
  //                 value={this.state.password}
  //                 onChange={this.update("password")}
  //                 className="signup-input"/>
  //             <br/>
  //             <input type="submit" value="Sign up"/>
  //           </div>
  //         </form>
  //       </div>
  //     );
  //   }
  // }

  render() {
    // if (this.formType === "login") {
      return(
        <div>
          <form onSubmit={this.handleLoginSubmit} className="login-form-box">
            Welcome back to Happy Camper!
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
                <input type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"/>
              <br/>
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"/>
              <br/>
              <input type="submit" value="Log in"/>
            </div>

            <div className="toggle-form">
              <div
                  className="toggle-session"
                  onClick={this.toggleSession("signup")}>
                <p>{"Not a member yet? Sign up!"}</p>
              </div>
            </div>
          </form>
        </div>
      );
  //   } else {
  //     // return signup
  //   }
  }
}

export default SessionForm;
